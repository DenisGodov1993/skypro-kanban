import { GlobalStyles } from "./GlobalStyles";
import AppRoutes from "./components/AppRoutes/AppRoutes";
import AuthProvider from "./context/AuthProvider";
import { TasksProvider } from "./context/TasksProvider";

function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <GlobalStyles />
        <AppRoutes />
      </TasksProvider>
    </AuthProvider>
  );
}

export default App;
