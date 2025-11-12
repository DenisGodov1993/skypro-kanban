import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import PopNewCard from "../popups/PopNewCard/PopNewCard";
import PopUser from "../popups/PopUser/PopUser";
import {
  SHeader,
  Container,
  HeaderBlock,
  // LogoLight,
  // LogoDark,
  Logo,
  Nav,
  MainButton,
  UserButton,
  PopupUserSet,
  PopUserName,
  PopUserMail,
  PopUserTheme,
  PopUserButton,
} from "./Header.styled";
import { ThemeContext } from "../../context/ThemeContext";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isPopOpen, setIsPopOpen] = useState(false);
  const [isPopUserOpen, setIsPopUserOpen] = useState(false);

  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);

  const togglePopup = () => {
    // console.log("togglePopup", !open);
    setOpen((prev) => !prev);
  };

  const onOpenNewCard = () => {
    setIsPopOpen(true);
  };
  const onCloseNewCard = () => {
    setIsPopOpen(false);
  };

  const onOpenPopUser = () => {
    // console.log("onOpenPopUser called", e?.type);
    setIsPopUserOpen(true);
  };
  const onClosePopUser = () => {
    setIsPopUserOpen(false);
  };

  const handleLogout = () => {
    setOpen(false);
    onOpenPopUser();
  };

  //   const confirmLogout = () => {
  //   logout();
  //   onClosePopUser();
  // };

  return (
    <>
      <SHeader>
        <Container>
          <HeaderBlock>
            {/* Логотипы */}
            {/* <LogoLight>
              <Link to="/">
                <img src="images/logo.svg" alt="logo" />
              </Link>
            </LogoLight>
            <LogoDark>
              <Link to="/">
                <img src="images/logo_dark.svg" alt="logo" />
              </Link>
            </LogoDark> */}
            <Logo>
              <Link to="/">
                <img
                  src={
                    theme === "light"
                      ? "images/logo.svg"
                      : "images/logo_dark.svg"
                  }
                  alt="logo"
                />
              </Link>
            </Logo>

            {/* Навигация */}
            <Nav>
              <MainButton onClick={onOpenNewCard}>
                Создать новую задачу
              </MainButton>

              <UserButton onClick={togglePopup}>
                {user?.name || "Пользователь"}
              </UserButton>

              {open && (
                <PopupUserSet id="user-set-target" themeMode={theme}>
                  <PopUserName themeMode={theme}>
                    {user?.name || "Без имени"}
                  </PopUserName>
                  <PopUserMail themeMode={theme}>
                    {user?.email || user?.login || "email@example.com"}
                  </PopUserMail>

                  <PopUserTheme>
                    <p>Темная тема</p>
                    <input
                      type="checkbox"
                      className="checkbox"
                      name="checkbox"
                      checked={theme === "dark"}
                      onChange={toggleTheme}
                    />
                  </PopUserTheme>

                  <PopUserButton
                    type="button"
                    // onClick={() => {
                    //   setOpen(false);
                    //   onOpenPopUser();
                    onClick={handleLogout}
                  >
                    Выйти
                  </PopUserButton>
                </PopupUserSet>
              )}
            </Nav>
          </HeaderBlock>
        </Container>
      </SHeader>

      {/* Модалка создания карточки */}
      {isPopOpen && <PopNewCard onClose={onCloseNewCard} />}
      {/* Модалка выхода */}
      {isPopUserOpen && <PopUser onClose={onClosePopUser} />}
    </>
  );
};

export default Header;
