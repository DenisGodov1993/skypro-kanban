import { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Загружаем тему из localStorage при старте
  useEffect(() => {
    const savedTheme = localStorage.getItem("appTheme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("appTheme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
