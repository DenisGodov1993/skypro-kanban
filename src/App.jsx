import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { GlobalStyles } from "./GlobalStyles";
import AppRoutes from "./components/AppRoutes/AppRoutes";
import AuthProvider from "./context/AuthProvider";
import { TasksProvider } from "./context/TasksProvider";

import ThemeProvider from "./context/ThemeProvider";
import { ThemeContext } from "./context/ThemeContext";
import { lightTheme, darkTheme } from "./utils/themeColors";

function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <ThemeProvider>
          <ThemeContext.Consumer>
            {({ theme }) => (
              <StyledThemeProvider
                theme={theme === "light" ? lightTheme : darkTheme}
              >
                <GlobalStyles />
                <AppRoutes />
                <ToastContainer
                  position="top-right"
                  autoClose={3000}
                  hideProgressBar={false}
                  newestOnTop
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme={theme === "light" ? "light" : "dark"}
                />
              </StyledThemeProvider>
            )}
          </ThemeContext.Consumer>
        </ThemeProvider>
      </TasksProvider>
    </AuthProvider>
  );
}

export default App;
