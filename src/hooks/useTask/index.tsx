import { useContext } from "react";
import { TaskContextType } from "../../context/types";
import { TaskContext } from "../../context/TaskContext";

export function useTask(): TaskContextType {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTask deve ser usado dentro de TaskProvider");
  }
  return context;
}
