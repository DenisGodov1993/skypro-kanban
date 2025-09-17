import { Outlet } from "react-router-dom";

import Main from "../components/Main/Main";
import Header from "../components/Header/Header";

import PopUser from "../components/popups/PopUser/PopUser";
import PopNewCard from "../components/popups/PopNewCard/PopNewCard";
// import PopBrowse from "../components/popups/PopBrowse/PopBrowse";

function MainPage({ loading, setIsAuth }) {
  return (
    <>
      <div className="wrapper">
        <PopUser />

        <PopNewCard />

        {/* <PopBrowse /> */}

        <Header setIsAuth={setIsAuth} />

        <Main loading={loading} />
      </div>
      <Outlet />
    </>
  );
}

export default MainPage;
