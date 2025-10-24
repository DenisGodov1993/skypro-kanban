import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


const PrivateRoute = () => {
  const { user } = useContext(AuthContext);
  return user ? <Outlet /> : <Navigate to="/sign-in" replace />; // replace - пользователь не сможет нажать "назад" и вернуться туда, куда ему нельзя
};

export default PrivateRoute; 

// КОД ДО КОНТЕКСТА
// import { Navigate, Outlet } from "react-router-dom";

// const PrivateRoute = ({ isAuth }) => {
//   return isAuth ? <Outlet /> : <Navigate to="/sign-in" replace />; // replace - пользователь не сможет нажать "назад" и вернуться туда, куда ему нельзя
// };

// export default PrivateRoute;

// import { Navigate, Outlet } from "react-router-dom";

// function PrivateRoute({ isAuth }) {
//   return isAuth ? <Outlet /> : <Navigate to="/sign-in" />;
// }

// export default PrivateRoute;