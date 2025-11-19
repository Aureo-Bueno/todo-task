export interface Item {
  id: number;
  name: string;
  done: boolean;
}

export interface TaskContextType {
  list: Item[];
  handleAddTask: (taskName: string) => void;
  handleCompleteTask: (id: number) => void;
  handleDeleteTask: (id: number) => void;
  handleEditTask: (id: number, newName: string) => void;
  listDoneTasks: Item[];
}
