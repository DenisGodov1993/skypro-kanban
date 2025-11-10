import { useNavigate } from "react-router-dom";
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
  const handleLogout = () => {
    console.log("handleLogout called");
    navigate("/sign-in");
  };

  return (
    <PopExit>
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTtl>
          <PopExitFormGroup>
            <PopExitYes type="button" onClick={handleLogout}>
              Да, выйти
            </PopExitYes>
            <PopExitNo type="button" onClick={onClose}>
              Нет, остаться
            </PopExitNo>
          </PopExitFormGroup>
        </PopExitBlock>
      </PopExitContainer>
    </PopExit>
  );
};

export default PopUser;
