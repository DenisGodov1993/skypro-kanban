import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import PopNewCard from "../popups/PopNewCard/PopNewCard";
import PopUser from "../popups/PopUser/PopUser";
import {
  SHeader,
  Container,
  HeaderBlock,
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
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const togglePopup = () => {
    setOpen((prev) => !prev);
  };

  const onOpenNewCard = () => {
    setIsPopOpen(true);
  };
  const onCloseNewCard = () => {
    setIsPopOpen(false);
  };

  const onOpenPopUser = () => {
    setIsPopUserOpen(true);
  };
  const onClosePopUser = () => {
    setIsPopUserOpen(false);
  };

  const handleConfirmLogout = () => {
    logout(); // очищаем контекст и localStorage
    setOpen(false);
    setIsPopUserOpen(false);
    navigate("/sign-in", { replace: true }); // редиректим на авторизацию
  };

  return (
    <>
      <SHeader>
        <Container>
          <HeaderBlock>
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
                <PopupUserSet $themeMode={theme}>
                  <PopUserName $themeMode={theme}>
                    {user?.name || "Без имени"}
                  </PopUserName>
                  <PopUserMail $themeMode={theme}>
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
                  <PopUserButton type="button" onClick={onOpenPopUser}>
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
      {isPopUserOpen && (
        <PopUser onClose={onClosePopUser} onConfirm={handleConfirmLogout} />
      )}
    </>
  );
};

export default Header;
