import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const PrivateRoute = () => {
  const { user } = useContext(AuthContext);
  // Считаем пользователя авторизованным только если есть валидный token
  const isAuthenticated = Boolean(user && user.token);

  return isAuthenticated ? <Outlet /> : <Navigate to="/sign-in" replace />;
};

export default PrivateRoute;
