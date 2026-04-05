import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { BoardColumn, Item, TaskContextType } from "./types";

const STORAGE_KEY = "tasks_board";
const LEGACY_STORAGE_KEY = "tasks_list";

const DEFAULT_COLUMNS: BoardColumn[] = [
  { id: "col-todo", title: "Todo", type: "todo" },
  { id: "col-in-progress", title: "In progress", type: "inProgress" },
  { id: "col-done", title: "Done", type: "done" },
];

type BoardState = {
  columns: BoardColumn[];
  tasks: Item[];
};

const cloneDefaultColumns = (): BoardColumn[] =>
  DEFAULT_COLUMNS.map((column) => ({ ...column }));

const ensureOneDoneColumn = (columns: BoardColumn[]): BoardColumn[] => {
  if (columns.length === 0) {
    return cloneDefaultColumns();
  }

  const sanitizedColumns = columns.map((column, index) => ({
    id: column.id?.trim() || `column-${index + 1}`,
    title: column.title?.trim() || `Coluna ${index + 1}`,
    type: column.type || "custom",
  }));

  let doneIndex = sanitizedColumns.findIndex((column) => column.type === "done");
  if (doneIndex === -1) {
    doneIndex = sanitizedColumns.length - 1;
  }

  return sanitizedColumns.map((column, index) => {
    if (index === doneIndex) {
      return { ...column, type: "done" };
    }

    if (column.type === "done") {
      return { ...column, type: "custom" };
    }

    return column;
  });
};

const getDoneColumnId = (columns: BoardColumn[]): string | null => {
  if (columns.length === 0) {
    return null;
  }

  return (
    columns.find((column) => column.type === "done")?.id ||
    columns[columns.length - 1]?.id ||
    null
  );
};

const isDoneColumn = (columnId: string, columns: BoardColumn[]): boolean => {
  const doneColumnId = getDoneColumnId(columns);
  return doneColumnId === columnId;
};

const normalizeTasks = (tasks: Item[], columns: BoardColumn[]): Item[] => {
  const firstColumnId = columns[0]?.id || "";
  const doneColumnId = getDoneColumnId(columns) || firstColumnId;

  return tasks
    .map((task, index) => {
      const fallbackColumnId = task.done ? doneColumnId : firstColumnId;
      const columnExists = columns.some((column) => column.id === task.columnId);
      const columnId = columnExists ? task.columnId : fallbackColumnId;

      if (!columnId) {
        return null;
      }

      return {
        id:
          typeof task.id === "number" && Number.isFinite(task.id)
            ? task.id
            : index + 1,
        name: task.name?.trim() || `Tarefa ${index + 1}`,
        columnId,
        done: isDoneColumn(columnId, columns),
      } satisfies Item;
    })
    .filter((task): task is Item => task !== null);
};

const getStoredBoard = (): BoardState => {
  try {
    const storedBoard = localStorage.getItem(STORAGE_KEY);

    if (storedBoard) {
      const parsed = JSON.parse(storedBoard) as Partial<BoardState>;

      if (Array.isArray(parsed.columns) && Array.isArray(parsed.tasks)) {
        const columns = ensureOneDoneColumn(parsed.columns as BoardColumn[]);
        const tasks = normalizeTasks(parsed.tasks as Item[], columns);
        return { columns, tasks };
      }
    }

    const legacyStoredTasks = localStorage.getItem(LEGACY_STORAGE_KEY);

    if (legacyStoredTasks) {
      const parsedLegacy = JSON.parse(legacyStoredTasks) as Item[];

      if (Array.isArray(parsedLegacy)) {
        const columns = cloneDefaultColumns();
        const doneColumnId = getDoneColumnId(columns) || columns[0].id;
        const firstColumnId = columns[0].id;

        const tasks = parsedLegacy.map((task, index) => {
          const columnId = task.done ? doneColumnId : firstColumnId;

          return {
            id:
              typeof task.id === "number" && Number.isFinite(task.id)
                ? task.id
                : index + 1,
            name: task.name?.trim() || `Tarefa ${index + 1}`,
            done: isDoneColumn(columnId, columns),
            columnId,
          } satisfies Item;
        });

        return { columns, tasks };
      }
    }
  } catch (error) {
    console.error("Erro ao carregar tarefas:", error);
  }

  return {
    columns: cloneDefaultColumns(),
    tasks: [],
  };
};

const saveBoardToStorage = (board: BoardState): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(board));
  } catch (error) {
    console.error("Erro ao salvar tarefas:", error);
  }
};

export const TaskContext = createContext<TaskContextType | undefined>(
  undefined,
);

interface TaskProviderProps {
  children: ReactNode;
}

export function TaskProvider({ children }: TaskProviderProps) {
  const [board, setBoard] = useState<BoardState>(() => getStoredBoard());

  useEffect(() => {
    saveBoardToStorage(board);
  }, [board]);

  const handleAddTask = useCallback((taskName: string): void => {
    const trimmedTaskName = taskName.trim();

    setBoard((currentBoard) => {
      if (!trimmedTaskName) {
        return currentBoard;
      }

      const columns =
        currentBoard.columns.length > 0
          ? ensureOneDoneColumn(currentBoard.columns)
          : cloneDefaultColumns();

      const targetColumnId = columns[0].id;
      const nextTaskId =
        currentBoard.tasks.length > 0
          ? Math.max(...currentBoard.tasks.map((task) => task.id)) + 1
          : 1;

      return {
        columns,
        tasks: [
          ...currentBoard.tasks,
          {
            id: nextTaskId,
            name: trimmedTaskName,
            done: isDoneColumn(targetColumnId, columns),
            columnId: targetColumnId,
          },
        ],
      };
    });
  }, []);

  const handleCompleteTask = useCallback((id: number): void => {
    setBoard((currentBoard) => {
      if (currentBoard.columns.length === 0) {
        return currentBoard;
      }

      const columns = ensureOneDoneColumn(currentBoard.columns);
      const firstColumnId = columns[0].id;
      const doneColumnId = getDoneColumnId(columns) || firstColumnId;

      return {
        columns,
        tasks: currentBoard.tasks.map((task) => {
          if (task.id !== id) {
            return task;
          }

          const taskIsDone = isDoneColumn(task.columnId, columns);
          const nextColumnId = taskIsDone ? firstColumnId : doneColumnId;

          return {
            ...task,
            columnId: nextColumnId,
            done: isDoneColumn(nextColumnId, columns),
          };
        }),
      };
    });
  }, []);

  const handleDeleteTask = useCallback((id: number): void => {
    setBoard((currentBoard) => ({
      ...currentBoard,
      tasks: currentBoard.tasks.filter((task) => task.id !== id),
    }));
  }, []);

  const handleEditTask = useCallback((id: number, newName: string): void => {
    const trimmedName = newName.trim();

    setBoard((currentBoard) => {
      if (!trimmedName) {
        return currentBoard;
      }

      return {
        ...currentBoard,
        tasks: currentBoard.tasks.map((task) =>
          task.id === id ? { ...task, name: trimmedName } : task,
        ),
      };
    });
  }, []);

  const handleMoveTaskToColumn = useCallback(
    (taskId: number, columnId: string): void => {
      setBoard((currentBoard) => {
        const columns = ensureOneDoneColumn(currentBoard.columns);
        const hasTargetColumn = columns.some((column) => column.id === columnId);

        if (!hasTargetColumn) {
          return currentBoard;
        }

        return {
          columns,
          tasks: currentBoard.tasks.map((task) =>
            task.id === taskId
              ? {
                  ...task,
                  columnId,
                  done: isDoneColumn(columnId, columns),
                }
              : task,
          ),
        };
      });
    },
    [],
  );

  const handleAddColumn = useCallback((columnName: string): void => {
    const trimmedName = columnName.trim();

    setBoard((currentBoard) => {
      const columns = ensureOneDoneColumn(currentBoard.columns);
      const nextColumn: BoardColumn = {
        id: `col-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        title: trimmedName || `Coluna ${columns.length + 1}`,
        type: "custom",
      };

      return {
        ...currentBoard,
        columns: [...columns, nextColumn],
      };
    });
  }, []);

  const handleEditColumn = useCallback(
    (columnId: string, nextName: string): void => {
      const trimmedName = nextName.trim();

      setBoard((currentBoard) => {
        if (!trimmedName) {
          return currentBoard;
        }

        return {
          ...currentBoard,
          columns: currentBoard.columns.map((column) =>
            column.id === columnId ? { ...column, title: trimmedName } : column,
          ),
        };
      });
    },
    [],
  );

  const handleDeleteColumn = useCallback((columnId: string): void => {
    setBoard((currentBoard) => {
      if (currentBoard.columns.length <= 1) {
        return currentBoard;
      }

      const remainingColumns = currentBoard.columns.filter(
        (column) => column.id !== columnId,
      );

      if (remainingColumns.length === 0) {
        return currentBoard;
      }

      const columns = ensureOneDoneColumn(remainingColumns);
      const fallbackColumnId = columns[0].id;

      return {
        columns,
        tasks: currentBoard.tasks.map((task) => {
          const hasCurrentColumn = columns.some(
            (column) => column.id === task.columnId,
          );
          const nextColumnId = hasCurrentColumn ? task.columnId : fallbackColumnId;

          return {
            ...task,
            columnId: nextColumnId,
            done: isDoneColumn(nextColumnId, columns),
          };
        }),
      };
    });
  }, []);

  const listDoneTasks = useMemo(() => {
    const doneColumnId = getDoneColumnId(board.columns);

    if (!doneColumnId) {
      return [];
    }

    return board.tasks.filter((task) => task.columnId === doneColumnId);
  }, [board.columns, board.tasks]);

  const listTasks = useMemo(() => {
    const doneColumnId = getDoneColumnId(board.columns);

    if (!doneColumnId) {
      return board.tasks;
    }

    return board.tasks.filter((task) => task.columnId !== doneColumnId);
  }, [board.columns, board.tasks]);

  const value = useMemo<TaskContextType>(
    () => ({
      list: listTasks,
      tasks: board.tasks,
      columns: board.columns,
      handleAddTask,
      handleCompleteTask,
      handleDeleteTask,
      handleEditTask,
      handleMoveTaskToColumn,
      handleAddColumn,
      handleEditColumn,
      handleDeleteColumn,
      listDoneTasks,
    }),
    [
      listTasks,
      board.tasks,
      board.columns,
      handleAddTask,
      handleCompleteTask,
      handleDeleteTask,
      handleEditTask,
      handleMoveTaskToColumn,
      handleAddColumn,
      handleEditColumn,
      handleDeleteColumn,
      listDoneTasks,
    ],
  );

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}
