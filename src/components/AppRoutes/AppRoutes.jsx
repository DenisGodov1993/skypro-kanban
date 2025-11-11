// import { Routes, Route } from "react-router-dom";
// import { useEffect, useState } from "react";
// import PrivateRoute from "../PrivateRoute/PrivateRoute";
// import MainPage from "../../pages/Main";
// import SignInPage from "../../pages/SignIn";
// import SignUpPage from "../../pages/SignUp";
// import PopBrowsePage from "../../pages/PopBrowse";
// import PopNewCardPage from "../../pages/PopNewCard";
// import PopUserPage from "../../pages/PopUser";
// import NotFoundPage from "../../pages/NotFound";

// function AppRoutes() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 3000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <Routes>
//       {/* Защищённые маршруты */}
//       <Route element={<PrivateRoute />}>
//         <Route path="/" element={<MainPage loading={loading} />}>
//           <Route path="card/:id" element={<PopBrowsePage />} />
//           <Route path="popnewcard" element={<PopNewCardPage />} />
//           <Route path="popuser" element={<PopUserPage />} />
//         </Route>
//       </Route>

//       {/* Публичные маршруты */}
//       <Route path="/sign-in" element={<SignInPage />} />
//       <Route path="/sign-up" element={<SignUpPage />} />

//       {/* 404 */}
//       <Route path="*" element={<NotFoundPage />} />
//     </Routes>
//   );
// }

// export default AppRoutes;


import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MainPage from "../../pages/Main";
import SignInPage from "../../pages/SignIn";
import SignUpPage from "../../pages/SignUp";
import PopBrowsePage from "../../pages/PopBrowse";
import PopNewCardPage from "../../pages/PopNewCard";
import PopUserPage from "../../pages/PopUser";
import NotFoundPage from "../../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      {/* Защищённые маршруты */}
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<MainPage />}>
          <Route path="card/:id" element={<PopBrowsePage />} />
          <Route path="popnewcard" element={<PopNewCardPage />} />
          <Route path="popuser" element={<PopUserPage />} />
        </Route>
      </Route>

      {/* Публичные маршруты */}
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />

      {/* 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
