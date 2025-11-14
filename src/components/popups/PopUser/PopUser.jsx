import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { AuthContext } from "../../../context/AuthContext";
import { toast } from "react-toastify";
import {
  PopExit,
  PopExitContainer,
  PopExitBlock,
  PopExitTtl,
  PopExitFormGroup,
  PopExitYes,
  PopExitNo,
} from "./PopUser.styled";

const PopUser = ({ onClose }) => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout(); // очистим контекст и localStorage
    toast.info("Вы вышли из аккаунта");
    onClose(); // закрываем модалку
    navigate("/sign-in", { replace: true }); // редиректим на логин
  };

  return (
    <PopExit>
      <PopExitContainer>
        <PopExitBlock $themeMode={theme}>
          <PopExitTtl $themeMode={theme}>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTtl>
          <PopExitFormGroup>
            <PopExitYes $themeMode={theme} type="button" onClick={handleLogout}>
              Да, выйти
            </PopExitYes>
            <PopExitNo $themeMode={theme} type="button" onClick={onClose}>
              Нет, остаться
            </PopExitNo>
          </PopExitFormGroup>
        </PopExitBlock>
      </PopExitContainer>
    </PopExit>
  );
};

export default PopUser;
