// import { createContext } from "react";

// export const ThemeContext = createContext(null);

import { createContext } from "react";

// Создаём контекст для темы
export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});
