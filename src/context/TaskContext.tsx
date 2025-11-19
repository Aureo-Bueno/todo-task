import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Item, TaskContextType } from "./types";

const STORAGE_KEY = "tasks_list";

const getStoredTasks = (): Item[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error("Erro ao carregar tarefas:", error);
    return [];
  }
};

const saveTasksToStorage = (tasks: Item[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error("Erro ao salvar tarefas:", error);
  }
};

export const TaskContext = createContext<TaskContextType | undefined>(
  undefined
);

interface TaskProviderProps {
  children: ReactNode;
}

export function TaskProvider({ children }: TaskProviderProps) {
  const [list, setList] = useState<Item[]>(() => getStoredTasks());

  useEffect(() => {
    saveTasksToStorage(list);
  }, [list]);

  const handleAddTask = (taskName: string): void => {
    if (taskName.trim() === "") return;

    const newTask: Item = {
      id: list.length > 0 ? Math.max(...list.map((t) => t.id)) + 1 : 1,
      name: taskName,
      done: false,
    };

    setList([...list, newTask]);
  };

  const handleCompleteTask = (id: number): void => {
    setList(
      list.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const handleDeleteTask = (id: number): void => {
    setList(list.filter((task) => task.id !== id));
  };

  const handleEditTask = (id: number, newName: string): void => {
    if (newName.trim() === "") return;

    setList(
      list.map((task) => (task.id === id ? { ...task, name: newName } : task))
    );
  };

  const listDoneTasks = list.filter((task) => task.done);

  const listTasks = list.filter((task) => !task.done);

  const value: TaskContextType = {
    list: listTasks,
    handleAddTask,
    handleCompleteTask,
    handleDeleteTask,
    handleEditTask,
    listDoneTasks,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}
