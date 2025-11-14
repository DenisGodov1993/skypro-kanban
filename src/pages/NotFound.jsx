import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: ${({ $themeMode }) =>
    $themeMode === "light" ? "#f1f1f1" : "#151419"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 72px;
  font-weight: 700;
  color: ${({ $themeMode }) =>
    $themeMode === "light" ? "#94A6BE" : "#E0E0E0"};
  margin-bottom: 16px;
`;

const Subtitle = styled.p`
  font-size: 20px;
  color: ${({ $themeMode }) =>
    $themeMode === "light" ? "#94A6BE" : "#C0C0C0"};
  margin-bottom: 32px;
`;

const HomeLink = styled(Link)`
  padding: 12px 24px;
  border-radius: 4px;
  border: 0.7px solid
    ${({ $themeMode }) => ($themeMode === "light" ? "#565EEF" : "#8888FF")};
  background-color: ${({ $themeMode }) =>
    $themeMode === "light" ? "#FFFFFF" : "#2C2C2C"};
  color: ${({ $themeMode }) =>
    $themeMode === "light" ? "#565EEF" : "#AAAAFF"};
  text-decoration: none;
  font-weight: 600;

  &:hover {
    background-color: ${({ themeMode }) =>
      themeMode === "light" ? "#565EEF" : "#5555AA"};
    color: #ffffff;
  }
`;

const NotFoundPage = () => {
  const { user } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  // Если пользователь не авторизован — ведём на страницу входа
  const homePath = user?.token ? "/" : "/sign-in";

  return (
    <Wrapper $themeMode={theme}>
      <Title $themeMode={theme}>404</Title>
      <Subtitle $themeMode={theme}>Страница не найдена</Subtitle>
      {/* to="/" */}
      <HomeLink to={homePath} $themeMode={theme}>
        {user?.token ? "На главную страницу" : "На страницу входа"}
      </HomeLink>
    </Wrapper>
  );
};

export default NotFoundPage;
