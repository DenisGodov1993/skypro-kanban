import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const PrivateRoute = () => {
  const { user } = useContext(AuthContext);
  return user ? <Outlet /> : <Navigate to="/sign-in" replace />; // replace - пользователь не сможет нажать "назад" и вернуться туда, куда ему нельзя
};

export default PrivateRoute;
