export interface Item {
  id: number;
  name: string;
  done: boolean;
  columnId: string;
}

export type ColumnType = "todo" | "inProgress" | "done" | "custom";

export interface BoardColumn {
  id: string;
  title: string;
  type: ColumnType;
}

export interface TaskContextType {
  list: Item[];
  tasks: Item[];
  columns: BoardColumn[];
  handleAddTask: (taskName: string) => void;
  handleCompleteTask: (id: number) => void;
  handleDeleteTask: (id: number) => void;
  handleEditTask: (id: number, newName: string) => void;
  handleMoveTaskToColumn: (taskId: number, columnId: string) => void;
  handleAddColumn: (columnName: string) => void;
  handleEditColumn: (columnId: string, nextName: string) => void;
  handleDeleteColumn: (columnId: string) => void;
  listDoneTasks: Item[];
}
