import { createContext } from "react";

export const TasksContext = createContext({
    tasks: [],
    setTasks: () => {},
    loading: false,
    error: "",
}); // Создали контекст гланой страницы канбан