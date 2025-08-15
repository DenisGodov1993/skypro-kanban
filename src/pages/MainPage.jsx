import { GlobalStyles } from "./GlobalStyles";
// import styled from "styled-components";
import PopUser from "../components/popups/PopUser/PopUser";
import PopNewCard from "../components/popups/PopNewCard/PopNewCard";
import PopBrowse from "../components/popups/PopBrowse/PopBrowse";
import Header from "../components/Header";
// import Main from "./components/Main/Main";
import Main from "../components/Main";

function MainPage(loading) {
  return (
    <>
      <GlobalStyles />
      <div className="wrapper">
        <PopUser />

        <PopNewCard />

        <PopBrowse />

        <Header />

        <Main loading={loading} />
      </div>
    </>
  );
}

export default MainPage;
