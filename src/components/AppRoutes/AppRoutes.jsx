// import { Route, Routes } from "react-router-dom";
// import { useState, useEffect } from "react";
// // import { useEffect } from "react";
// import { GlobalStyles } from "./GlobalStyles";

// import PopUser from "./components/popups/PopUser/PopUser";
// import PopNewCard from "./components/popups/PopNewCard/PopNewCard";
// import PopBrowse from "./components/popups/PopBrowse/PopBrowse";

// import Header from "./components/Header/Header";
// import Main from "./components/Main/Main";

// function AppRoutes() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(false);
//     }, 3000);
//   }, [loading]);

//   return (
//     <Routes>
//       <GlobalStyles />
//       <div className="wrapper">
//         <PopUser />

//         <PopNewCard />

//         <PopBrowse />

//         <Header />

//         <Main loading={loading} />
//       </div>
//     </Routes>
//   );
// }

// export default AppRoutes;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import MainPage from "../../pages/MainPage";
import SignInPage from "../../pages/SignInPage";
import SignUpPage from "../../pages/SignUpPage";

function AppRoutes() {
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      setTimeout(() => {
         setLoading(false);
      }, 3000);
   }, []);

   return (
      <Router>
         <Routes>
            {/* Главная страница */}
            <Route path="/" element={<MainPage loading={loading} />} />
            {/* Страница входа */}
            <Route path="/sign-in" element={<SignInPage />} />
            {/* Страница регистрации */}
            <Route path="/sign-up" element={<SignUpPage />} />
         </Routes>
      </Router>
   );
}

export default AppRoutes