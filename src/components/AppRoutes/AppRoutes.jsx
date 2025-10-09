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
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<MainPage />}>
          <Route path="card/:id" element={<PopBrowsePage />} />
          <Route path="popnewcard" element={<PopNewCardPage />} />
          <Route path="popuser" element={<PopUserPage />} />
        </Route>
      </Route>
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;

// import { Routes, Route } from "react-router-dom";
// // import { useEffect, useState } from "react";

// import PrivateRoute from "../PrivateRoute/PrivateRoute";

// import MainPage from "../../pages/Main";
// import SignInPage from "../../pages/SignIn";
// import SignUpPage from "../../pages/SignUp";
// import PopBrowsePage from "../../pages/PopBrowse";
// import PopNewCardPage from "../../pages/PopNewCard";
// import PopUserPage from "../../pages/PopUser";
// import NotFoundPage from "../../pages/NotFound";

// function AppRoutes() {
//   // const [loading, setLoading] = useState(true);
//   // const [isAuth, setIsAuth] = useState(
//   //   () => localStorage.getItem("isAuth") === "true"
//   // );

//   // useEffect(() => {
//   //   const timer = setTimeout(() => setLoading(false), 3000);
//   //   return () => clearTimeout(timer);
//   // }, []);

//   // useEffect(() => {
//   //   localStorage.setItem("isAuth", isAuth);
//   // }, [isAuth]);

//   return (
//     <Routes>
//       {/* <Route element={<PrivateRoute isAuth={isAuth} />}> */}
//       <Route element={<PrivateRoute />}>
//         <Route path="/" element={<MainPage />}>
//           <Route path="/card/:id" element={<PopBrowsePage />} />
//           <Route path="/popnewcard" element={<PopNewCardPage />} />
//           <Route path="/popuser" element={<PopUserPage />} />
//         </Route>
//       </Route>
//       <Route path="/sign-in" element={<SignInPage />} />
//       <Route path="/sign-up" element={<SignUpPage />} />
//       <Route path="*" element={<NotFoundPage />} />
//     </Routes>
//   );
// }

// export default AppRoutes;

// КОД ДО КОНТЕКСТА
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
//   const [isAuth, setIsAuth] = useState(
//     () => localStorage.getItem("isAuth") === "true"
//   );

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 3000);
//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("isAuth", isAuth);
//   }, [isAuth]);

//   return (
//     <Routes>
//       <Route element={<PrivateRoute isAuth={isAuth} />}>
//         <Route
//           path="/"
//           element={<MainPage setIsAuth={setIsAuth} loading={loading} />}
//         ></Route>
//         <Route path="/card/:id" element={<PopBrowsePage />} />
//         <Route path="/popnewcard" element={<PopNewCardPage />} />
//         <Route path="/popuser" element={<PopUserPage />} />
//       </Route>
//       <Route path="/sign-in" element={<SignInPage setIsAuth={setIsAuth} />} />
//       <Route path="/sign-up" element={<SignUpPage setIsAuth={setIsAuth} />} />
//       <Route path="*" element={<NotFoundPage />} />
//     </Routes>
//   );
// }

// export default AppRoutes;

// import { Routes, Route, Navigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import MainPage from "../../pages/Main";
// import SignInPage from "../../pages/SignIn";
// import SignUpPage from "../../pages/SignUp";

// function AppRoutes() {
//   const [loading, setLoading] = useState(true);
//   const [isAuth] = useState(false);

//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(false);
//     }, 3000);
//   }, [loading]);

//   return (
//     <Routes>
//       <Route
//         path="/"
//         element={isAuth ? <MainPage /> : <Navigate to="/sign-in" replace />}
//       />
//       <Route path="/sign-in" element={<SignInPage />} />
//       <Route path="/sign-up" element={<SignUpPage />} />
//     </Routes>
//   );
// }

// export default AppRoutes;

// import { Routes, Route } from "react-router-dom";

// import MainPage from "../../pages/Main.jsx";
// import SignUpPage from "../../pages/SignUp.jsx";
// import SignInPage from "../../pages/SignIn.jsx";

// export default function AppRoutes() {
//   return (
//     <Routes>
//       <Route path="/" element={<MainPage />} />
//       <Route path="/sign-up" element={<SignUpPage />} />
//       <Route path="/sign-in" element={<SignInPage />} />
//     </Routes>
//   );
// }

// export default AppRoutes;
