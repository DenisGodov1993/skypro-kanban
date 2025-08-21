import { Outlet } from "react-router-dom";

import Main from "../components/Main/Main";
import Header from "../components/Header/Header";

import PopUser from "../components/popups/PopUser/PopUser";
import PopNewCard from "../components/popups/PopNewCard/PopNewCard";
import PopBrowse from "../components/popups/PopBrowse/PopBrowse";

// setIsAuth

function MainPage({ loading }) {
  return (
    <>
      <div className="wrapper">
        <PopUser />

        <PopNewCard />

        <PopBrowse />

        <Header />

        <Main loading={loading} />
        {/* setIsAuth={setIsAuth} */}
        
      </div>
      <Outlet />
    </>
  );
}

export default MainPage;
