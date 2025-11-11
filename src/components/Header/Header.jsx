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

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isPopOpen, setIsPopOpen] = useState(false);
  const [isPopUserOpen, setIsPopUserOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

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

  const onOpenPopUser = (e) => {
    console.log("onOpenPopUser called", e?.type);
    setIsPopUserOpen(true);
  };

  const onClosePopUser = () => {
    setIsPopUserOpen(false);
  };

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

              <UserButton onClick={togglePopup}>Ivan Ivanov</UserButton>

              {open && (
                <PopupUserSet id="user-set-target" themeMode={theme}>
                  <PopUserName themeMode={theme}>Ivan Ivanov</PopUserName>
                  <PopUserMail themeMode={theme}>
                    ivan.ivanov@gmail.com
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
                    onClick={() => {
                      setOpen(false);
                      onOpenPopUser();
                    }}
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

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import PopNewCard from "../popups/PopNewCard/PopNewCard";
// import PopUser from "../popups/PopUser/PopUser";
// import {
//   SHeader,
//   Container,
//   HeaderBlock,
//   LogoLight,
//   LogoDark,
//   Nav,
//   MainButton,
//   UserButton,
//   PopupUserSet,
//   PopUserName,
//   PopUserMail,
//   PopUserTheme,
//   PopUserButton,
// } from "./Header.styled";

// const Header = () => {
//   const [open, setOpen] = useState(false);
//   const [isPopOpen, setIsPopOpen] = useState(false);
//   const [isPopUserOpen, setIsPopUserOpen] = useState(false);

//   const togglePopup = () => {
//     console.log("togglePopup", !open);
//     setOpen((prev) => !prev);
//   };

//   const onOpenNewCard = () => {
//     setIsPopOpen(true);
//   };

//   const onCloseNewCard = () => {
//     setIsPopOpen(false);
//   };

//   const onOpenPopUser = (e) => {
//     console.log("onOpenPopUser called", e?.type);
//     setIsPopUserOpen(true);
//   };

//   const onClosePopUser = () => {
//     setIsPopUserOpen(false);
//   };

//   return (
//     <>
//       <SHeader>
//         <Container>
//           <HeaderBlock>
//             {/* Логотипы */}
//             <LogoLight>
//               <Link to="/">
//                 <img src="images/logo.svg" alt="logo" />
//               </Link>
//             </LogoLight>
//             <LogoDark>
//               <Link to="/">
//                 <img src="images/logo_dark.svg" alt="logo" />
//               </Link>
//             </LogoDark>

//             {/* Навигация */}
//             <Nav>
//               <MainButton onClick={onOpenNewCard}>
//                 Создать новую задачу
//               </MainButton>

//               <UserButton onClick={togglePopup}>Ivan Ivanov</UserButton>

//               {open && (
//                 <PopupUserSet id="user-set-target">
//                   <PopUserName>Ivan Ivanov</PopUserName>
//                   <PopUserMail>ivan.ivanov@gmail.com</PopUserMail>

//                   <PopUserTheme>
//                     <p>Темная тема</p>
//                     <input
//                       type="checkbox"
//                       className="checkbox"
//                       name="checkbox"
//                     />
//                   </PopUserTheme>

//                   <PopUserButton
//                     type="button"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       setOpen(false);
//                       onOpenPopUser();
//                     }}
//                   >
//                     Выйти
//                   </PopUserButton>
//                 </PopupUserSet>
//               )}
//             </Nav>
//           </HeaderBlock>
//         </Container>
//       </SHeader>

//       {/* Модалка создания карточки */}
//       {isPopOpen && <PopNewCard onClose={onCloseNewCard} />}
//       {/* Модалка выхода */}
//       {isPopUserOpen && <PopUser onClose={onClosePopUser} />}
//     </>
//   );
// };

// export default Header;
