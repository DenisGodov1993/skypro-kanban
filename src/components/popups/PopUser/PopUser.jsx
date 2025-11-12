import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
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

  const handleLogout = () => {
    console.log("handleLogout called");
    toast.info("Вы вышли из аккаунта")
    navigate("/sign-in");
  };

  return (
    <PopExit>
      <PopExitContainer>
        <PopExitBlock themeMode={theme}>
          <PopExitTtl themeMode={theme}> 
            <h2>Выйти из аккаунта?</h2>
          </PopExitTtl>
          <PopExitFormGroup>
            <PopExitYes themeMode={theme} type="button" onClick={handleLogout}>
              Да, выйти
            </PopExitYes>
            <PopExitNo themeMode={theme} type="button" onClick={onClose}>
              Нет, остаться
            </PopExitNo>
          </PopExitFormGroup>
        </PopExitBlock>
      </PopExitContainer>
    </PopExit>
  );
};

export default PopUser;

// import { useNavigate } from "react-router-dom";
// import {
//   PopExit,
//   PopExitContainer,
//   PopExitBlock,
//   PopExitTtl,
//   PopExitFormGroup,
//   PopExitYes,
//   PopExitNo,
// } from "./PopUser.styled";

// const PopUser = ({ onClose }) => {
//   const navigate = useNavigate();
//   const handleLogout = () => {
//     console.log("handleLogout called");
//     navigate("/sign-in");
//   };

//   return (
//     <PopExit>
//       <PopExitContainer>
//         <PopExitBlock>
//           <PopExitTtl> 
//             <h2>Выйти из аккаунта?</h2>
//           </PopExitTtl>
//           <PopExitFormGroup>
//             <PopExitYes type="button" onClick={handleLogout}>
//               Да, выйти
//             </PopExitYes>
//             <PopExitNo type="button" onClick={onClose}>
//               Нет, остаться
//             </PopExitNo>
//           </PopExitFormGroup>
//         </PopExitBlock>
//       </PopExitContainer>
//     </PopExit>
//   );
// };

// export default PopUser;
