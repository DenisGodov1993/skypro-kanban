import { useState } from "react";
import { Link } from "react-router-dom";
import PopNewCard from "../popups/PopNewCard/PopNewCard";
import PopUser from "../popups/PopUser/PopUser";
import {
  SHeader,
  Container,
  HeaderBlock,
  LogoLight,
  LogoDark,
  Nav,
  MainButton,
  UserButton,
  PopupUserSet,
  PopUserName,
  PopUserMail,
  PopUserTheme,
  PopUserButton,
} from "./Header.styled";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isPopOpen, setIsPopOpen] = useState(false);
  const [isPopUserOpen, setIsPopUserOpen] = useState(false);

  const togglePopup = () => {
    console.log("togglePopup", !open);
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
            <LogoLight>
              <Link to="/">
                <img src="images/logo.svg" alt="logo" />
              </Link>
            </LogoLight>
            <LogoDark>
              <Link to="/">
                <img src="images/logo_dark.svg" alt="logo" />
              </Link>
            </LogoDark>

            {/* Навигация */}
            <Nav>
              <MainButton onClick={onOpenNewCard}>
                Создать новую задачу
              </MainButton>

              <UserButton onClick={togglePopup}>Ivan Ivanov</UserButton>

              {open && (
                <PopupUserSet id="user-set-target">
                  <PopUserName>Ivan Ivanov</PopUserName>
                  <PopUserMail>ivan.ivanov@gmail.com</PopUserMail>

                  <PopUserTheme>
                    <p>Темная тема</p>
                    <input
                      type="checkbox"
                      className="checkbox"
                      name="checkbox"
                    />
                  </PopUserTheme>

                  <PopUserButton
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
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
//   }

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

//               {/* {open && (
//                 <PopupUserSet id="user-set-target">
//                   <p className="pop-user-set__name">Ivan Ivanov</p>
//                   <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
//                   <div className="pop-user-set__theme">
//                     <p>Темная тема</p>
//                     <input
//                       type="checkbox"
//                       className="checkbox"
//                       name="checkbox"
//                     />
//                   </div>
//                   <button
//                     type="button"
//                     className="_hover03"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       setOpen(false);
//                       onOpenPopUser();
//                     }}
//                   >
//                     Выйти
//                   </button>
//                 </PopupUserSet>
//               )} */}

//               {open && (
//   <PopupUserSet id="user-set-target">
//     <PopUserName>Ivan Ivanov</PopUserName>
//     <PopUserMail>ivan.ivanov@gmail.com</PopUserMail>

//     <PopUserTheme>
//       <p>Темная тема</p>
//       <input type="checkbox"
//       className="checkbox"
//       name="checkbox" />
//     </PopUserTheme>

//     <PopUserButton
//       type="button"
//       onClick={(e) => {
//         e.stopPropagation();
//         setOpen(false);
//         onOpenPopUser();
//       }}
//     >
//       Выйти
//     </PopUserButton>
//   </PopupUserSet>
// )}

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

// до курсовой
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
// } from "./Header.styled";

// const Header = () => {
//   const [open, setOpen] = useState(false);
//   const [isPopOpen, setIsPopOpen] = useState(false);
//   const [isPopUserOpen, setIsPopUserOpen] = useState(false);

//   const togglePopup = () => {
//     console.log("togglePopup", !open);
//     setOpen((prev) => !prev);
//   }

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

//               {/* {open && (
//                 <PopupUserSet id="user-set-target">
//                   <p className="pop-user-set__name">Ivan Ivanov</p>
//                   <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
//                   <div className="pop-user-set__theme">
//                     <p>Темная тема</p>
//                     <input
//                       type="checkbox"
//                       className="checkbox"
//                       name="checkbox"
//                     />
//                   </div>
//                   <button onClick={onOpenPopUser} type="button" className="_hover03">
//                     Выйти
//                   </button>
//                 </PopupUserSet>
//               )} */}
//               {open && (
//                 <PopupUserSet id="user-set-target">
//                   <p className="pop-user-set__name">Ivan Ivanov</p>
//                   <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
//                   <div className="pop-user-set__theme">
//                     <p>Темная тема</p>
//                     <input
//                       type="checkbox"
//                       className="checkbox"
//                       name="checkbox"
//                     />
//                   </div>
//                   <button
//                     type="button"
//                     className="_hover03"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       setOpen(false);
//                       onOpenPopUser();
//                     }}
//                   >
//                     Выйти
//                   </button>
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

// ПЕРВОНАЧАЛЬНЫЙ ВАРИАНТ КОДА

// const Header = () => {
//   return (
//     <header className="header">
//       <div className="container">
//         <div className="header__block">
//           <div className="header__logo _show _light">
//             <a href="" target="_self">
//               <img src="images/logo.png" alt="logo" />
//             </a>
//           </div>
//           <div className="header__logo _dark">
//             <a href="" target="_self">
//               <img src="images/logo_dark.png" alt="logo" />
//             </a>
//           </div>
//           <nav className="header__nav">
//             <button className="header__btn-main-new _hover01" id="btnMainNew">
//               <a href="#popNewCard">Создать новую задачу</a>
//             </button>
//             <a href="#user-set-target" className="header__user _hover02">
//               Ivan Ivanov
//             </a>

//             <div
//               className="header__pop-user-set pop-user-set"
//               id="user-set-target"
//             >
//               {/* <a href="">x</a> */}
//               <p className="pop-user-set__name">Ivan Ivanov</p>
//               <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
//               <div className="pop-user-set__theme">
//                 <p>Темная тема</p>
//                 <input type="checkbox" className="checkbox" name="checkbox" />
//               </div>
//               <button type="button" className="_hover03">
//                 <a href="#popExit">Выйти</a>
//               </button>
//             </div>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
