import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import PopNewCard from "../popups/PopNewCard/PopNewCard";
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
} from "./Header.styled";

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [isPopOpen, setIsPopOpen] = useState(false); // состояние для модалки

  const togglePopup = () => setOpen((prev) => !prev);

  const handleLogout = () => {
    navigate("/sign-in");
  };

  const onOpenNewCard = () => {
    setIsPopOpen(true); // открываем модалку
  };

  const onCloseNewCard = () => {
    setIsPopOpen(false); // закрываем модалку
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
                  <p className="pop-user-set__name">Ivan Ivanov</p>
                  <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                  <div className="pop-user-set__theme">
                    <p>Темная тема</p>
                    <input
                      type="checkbox"
                      className="checkbox"
                      name="checkbox"
                    />
                  </div>
                  <button onClick={handleLogout} type="button" className="_hover03">
                    Выйти
                  </button>
                </PopupUserSet>
              )}
            </Nav>
          </HeaderBlock>
        </Container>
      </SHeader>

      {/* Модалка открывается, если isPopOpen = true */}
      {isPopOpen && <PopNewCard onClose={onCloseNewCard} />}
    </>
  );
};

export default Header;


// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import PopNewCard from "../PopNewCard/PopNewCard";
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
//   // setIsAuth,
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);
//   const togglePopup = () => setOpen((prev) => !prev);

//   const handleLogout = () => {
//     // setIsAuth(false);
//     navigate("/sign-in");
//   };

//   const onOpenNewCard = () => {
//     navigate("/popnewcard"); 
//   };

//   return (
//     <SHeader>
//       <Container>
//         <HeaderBlock>
//           {/* Логотипы */}
//           <LogoLight>
//             <Link to="/">
//               <img src="images/logo.svg" alt="logo" />
//             </Link>
//           </LogoLight>
//           <LogoDark>
//             <Link to="/">
//               <img src="images/logo_dark.svg" alt="logo" />
//             </Link>
//           </LogoDark>
//           {/* Навигация */}
//           <Nav>
//             <MainButton onClick={onOpenNewCard}>
//               Создать новую задачу
//             </MainButton>

//             <UserButton onClick={togglePopup}>
//               Ivan Ivanov
//             </UserButton>

//             {open && (
//               <PopupUserSet id="user-set-target">
//                 <p className="pop-user-set__name">Ivan Ivanov</p>
//                 <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
//                 <div className="pop-user-set__theme">
//                   <p>Темная тема</p>
//                   <input type="checkbox" className="checkbox" name="checkbox" />
//                 </div>
//                 <button
//                   onClick={handleLogout}
//                   type="button"
//                   className="_hover03"
//                 >
//                   Выйти
//                 </button>
//               </PopupUserSet>
//             )}
//           </Nav>
//         </HeaderBlock>
//       </Container>
//     </SHeader>
//   );
// };

// export default Header;

// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
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
//   // setIsAuth,
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);
//   const togglePopup = () => setOpen((prev) => !prev);

//   const handleLogout = () => {
//     // setIsAuth(false);
//     navigate("/sign-in");
//   };

//   const onOpenNewCard = () => {
//     navigate("/popnewcard"); 
//   };


//   return (
//     <SHeader>
//       <Container>
//         <HeaderBlock>
//           {/* Логотипы */}
//           <LogoLight>
//             <Link to="/">
//               <img src="images/logo.svg" alt="logo" />
//             </Link>
//           </LogoLight>
//           <LogoDark>
//             <Link to="/">
//               <img src="images/logo_dark.svg" alt="logo" />
//             </Link>
//           </LogoDark>
//           {/* Навигация */}
//           <Nav>
//             <MainButton onClick={onOpenNewCard}>
//               Создать новую задачу
//             </MainButton>

//             <UserButton onClick={togglePopup}>
//               Ivan Ivanov
//             </UserButton>

//             {open && (
//               <PopupUserSet id="user-set-target">
//                 <p className="pop-user-set__name">Ivan Ivanov</p>
//                 <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
//                 <div className="pop-user-set__theme">
//                   <p>Темная тема</p>
//                   <input type="checkbox" className="checkbox" name="checkbox" />
//                 </div>
//                 <button
//                   onClick={handleLogout}
//                   type="button"
//                   className="_hover03"
//                 >
//                   Выйти
//                 </button>
//               </PopupUserSet>
//             )}
//           </Nav>
//         </HeaderBlock>
//       </Container>
//     </SHeader>
//   );
// };

// export default Header;

// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// const Header = () => {
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);

//   const togglePopup = () => setOpen((prev) => !prev);
//   const handleLogout = () => {
//     localStorage.removeItem("userInfo");
//     navigate("/sign-in");
//   };

//   const handleOpenNewCard = () => {
//     navigate("popnewcard"); // ✅ открывает модалку через Router
//   };

//   return (
//     <header className="header">
//       <div className="header__content">
//         <h1>Kanban</h1>
//         <div className="header__actions">
//           <button onClick={handleOpenNewCard}>Создать новую задачу</button>
//           <button onClick={togglePopup}>Профиль</button>
//           {open && (
//             <div className="popup">
//               <p>Ivan Ivanov</p>
//               <p>ivan.ivanov@gmail.com</p>
//               <button onClick={handleLogout}>Выйти</button>
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   SHeader,
//   Container,
//   HeaderBlock,
//   LogoLight,
//   LogoDark,
//   Nav,
//   MainButton,
//   UserLink,
//   PopupUserSet,
// } from "./Header.styled";

// const Header = ({ setIsAuth, onOpenNewCard }) => {
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);
//   const togglePopup = () => setOpen((prev) => !prev);

//   const handleLogout = () => {
//     setIsAuth(false);
//     navigate("/sign-in");
//   };

//   return (
//     <SHeader>
//       <Container>
//         <HeaderBlock>
//           <LogoLight className="_show _light">
//             <a href="/" target="_self">
//               <img src="images/logo.svg" alt="logo" />
//             </a>
//           </LogoLight>
//           <LogoDark className="_dark">
//             <a href="/" target="_self">
//               <img src="images/logo_dark.png" alt="logo" />
//             </a>
//           </LogoDark>

//           <Nav>
//             <MainButton id="btnMainNew" className="_hover01" onClick={onOpenNewCard}>
//               Создать новую задачу
//             </MainButton>

//             <UserLink onClick={togglePopup} className="_hover02">
//               Ivan Ivanov
//             </UserLink>

//             {open && (
//               <PopupUserSet id="user-set-target">
//                 <p className="pop-user-set__name">Ivan Ivanov</p>
//                 <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
//                 <div className="pop-user-set__theme">
//                   <p>Темная тема</p>
//                   <input type="checkbox" className="checkbox" name="checkbox" />
//                 </div>
//                 <button onClick={handleLogout} type="button" className="_hover03">
//                   Выйти
//                 </button>
//               </PopupUserSet>
//             )}
//           </Nav>
//         </HeaderBlock>
//       </Container>
//     </SHeader>
//   );
// };

// export default Header;

// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import {
//   SHeader,
//   Container,
//   HeaderBlock,
//   LogoLight,
//   LogoDark,
//   Nav,
//   MainButton,
//   UserLink,
//   PopupUserSet,
// } from "./Header.styled";

// const Header = ({ setIsAuth }) => {
//   const navigate = useNavigate();

//   // const handleCreateTask = () => {
//   //   navigate("popnewcard");
//   // };
//   const handleCreateTask = () => {
//     onOpenNewCard();
//   };

//   const handleLogout = () => {
//     setIsAuth(false);
//     navigate("/sign-in");
//   };

//   const [open, setOpen] = useState(false);
//   const togglePopup = () => setOpen((prev) => !prev);

//   return (
//     <SHeader>
//       <Container>
//         <HeaderBlock>
//           <LogoLight className="_show _light">
//             <a href="/" target="_self">
//               <img src="images/logo.svg" alt="logo" />
//             </a>
//           </LogoLight>
//           <LogoDark className="_dark">
//             <a href="/" target="_self">
//               <img src="images/logo_dark.png" alt="logo" />
//             </a>
//           </LogoDark>

//           <Nav>
//             {/* Навигация на создание задачи */}
//             <MainButton
//               id="btnMainNew"
//               className="_hover01"
//               onClick={handleCreateTask}
//               // onClick={() => navigate("popnewcard")}
//             >
//               Создать новую задачу
//             </MainButton>

//             <UserLink onClick={togglePopup} className="_hover02">
//               Ivan Ivanov
//             </UserLink>

//             {open && (
//               <PopupUserSet id="user-set-target">
//                 <p className="pop-user-set__name">Ivan Ivanov</p>
//                 <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
//                 <div className="pop-user-set__theme">
//                   <p>Темная тема</p>
//                   <input type="checkbox" className="checkbox" name="checkbox" />
//                 </div>

//                 <button
//                   onClick={handleLogout}
//                   type="button"
//                   className="_hover03"
//                 >
//                   Выйти
//                 </button>
//               </PopupUserSet>
//             )}
//           </Nav>
//         </HeaderBlock>
//       </Container>
//     </SHeader>
//   );
// };

// export default Header;

// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   SHeader,
//   Container,
//   HeaderBlock,
//   LogoLight,
//   LogoDark,
//   Nav,
//   MainButton,
//   UserLink,
//   PopupUserSet,
// } from "./Header.styled";

// const Header = ({ setIsAuth }) => {
//   const navigate = useNavigate();
//   const handleLogout = (e) => {
//     e.preventDefault();
//     setIsAuth(false);
//     navigate("/sign-in");
//     // navigate("/");
//   };

//   const [open, setOpen] = useState(false);

//   const togglePopup = () => {
//     setOpen((prev) => !prev);
//   };

//   return (
//     <SHeader>
//       <Container>
//         <HeaderBlock>
//           <LogoLight className="_show _light">
//             <a href="" target="_self">
//               <img src="images/logo.svg" alt="logo" />
//             </a>
//           </LogoLight>
//           <LogoDark className="_dark">
//             <a href="" target="_self">
//               <img src="images/logo_dark.png" alt="logo" />
//             </a>
//           </LogoDark>

//           <Nav>
//             {/* <MainButton className="_hover01" id="btnMainNew">
//               <a href="#popNewCard">Создать новую задачу</a>
//             </MainButton> */}

//             <MainButton className="_hover01" id="btnMainNew">
//               <Link to="popnewcard">Создать новую задачу</Link>
//             </MainButton>

//             <UserLink
//               href="#user-set-target"
//               onClick={togglePopup}
//               className="_hover02"
//             >
//               Ivan Ivanov
//             </UserLink>

//             {open && (
//               <PopupUserSet id="user-set-target">
//                 <p className="pop-user-set__name">Ivan Ivanov</p>
//                 <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
//                 <div className="pop-user-set__theme">
//                   <p>Темная тема</p>
//                   <input type="checkbox" className="checkbox" name="checkbox" />
//                 </div>
//                 <button
//                   onClick={handleLogout}
//                   type="button"
//                   className="_hover03"
//                 >
//                   <Link to="/popuser">Выйти</Link>
//                   {/* <a href="#popExit">Выйти</a> */}
//                 </button>
//               </PopupUserSet>
//             )}
//           </Nav>
//         </HeaderBlock>
//       </Container>
//     </SHeader>
//   );
// };

// export default Header;

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   SHeader,
//   Container,
//   HeaderBlock,
//   LogoLight,
//   LogoDark,
//   Nav,
//   MainButton,
//   UserLink,
//   PopupUserSet,
// } from "./Header.styled";

// import PopUser from "../popups/PopUser/PopUser";

// const Header = ({ setIsAuth }) => {
//   const navigate = useNavigate();

//   const [openUserMenu, setOpenUserMenu] = useState(false); // меню пользователя
//   const [showExitModal, setShowExitModal] = useState(false); // модалка выхода

//   const togglePopup = () => {
//     setOpenUserMenu((prev) => !prev);
//   };

//   const handleLogoutConfirm = () => {
//     setIsAuth(false); // сбрасываем авторизацию
//     setShowExitModal(false);
//     navigate("/sign-in"); // редиректим на страницу входа
//   };

//   return (
//     <>
//       <SHeader>
//         <Container>
//           <HeaderBlock>
//             <LogoLight className="_show _light">
//               <a href="/" target="_self">
//                 <img src="images/logo.png" alt="logo" />
//               </a>
//             </LogoLight>
//             <LogoDark className="_dark">
//               <a href="/" target="_self">
//                 <img src="images/logo_dark.png" alt="logo" />
//               </a>
//             </LogoDark>

//             <Nav>
//               <MainButton className="_hover01" id="btnMainNew">
//                 <a href="#popNewCard">Создать новую задачу</a>
//               </MainButton>

//               <UserLink
//                 href="#user-set-target"
//                 onClick={togglePopup}
//                 className="_hover02"
//               >
//                 Ivan Ivanov
//               </UserLink>

//               {openUserMenu && (
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
//                     onClick={() => setShowExitModal(true)} // 👈 открываем модалку
//                   >
//                     Выйти
//                   </button>
//                 </PopupUserSet>
//               )}
//             </Nav>
//           </HeaderBlock>
//         </Container>
//       </SHeader>

//       {/* Модальное окно выхода */}
//       <PopUser
//         isOpen={showExitModal}
//         onConfirm={handleLogoutConfirm}
//         onCancel={() => setShowExitModal(false)}
//       />
//     </>
//   );
// };

// export default Header;

// КОД ДО РОУТИНГА

// import { useState } from "react";
// import {
//   SHeader,
//   Container,
//   HeaderBlock,
//   LogoLight,
//   LogoDark,
//   Nav,
//   MainButton,
//   UserLink,
//   PopupUserSet,
// } from "./Header.styled";

// const Header = () => {
//   const [open, setOpen] = useState(false);

//   const togglePopup = () => {
//     setOpen((prev) => !prev);
//   };

//   return (
//     <SHeader>
//       <Container>
//         <HeaderBlock>
//           <LogoLight className="_show _light">
//             <a href="" target="_self">
//               <img src="images/logo.png" alt="logo" />
//             </a>
//           </LogoLight>
//           <LogoDark className="_dark">
//             <a href="" target="_self">
//               <img src="images/logo_dark.png" alt="logo" />
//             </a>
//           </LogoDark>

//           <Nav>
//             <MainButton className="_hover01" id="btnMainNew">
//               <a href="#popNewCard">Создать новую задачу</a>
//             </MainButton>

//             <UserLink
//               href="#user-set-target"
//               onClick={togglePopup}
//               className="_hover02"
//             >
//               Ivan Ivanov
//             </UserLink>

//             {open && (
//               <PopupUserSet id="user-set-target">
//                 <p className="pop-user-set__name">Ivan Ivanov</p>
//                 <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
//                 <div className="pop-user-set__theme">
//                   <p>Темная тема</p>
//                   <input type="checkbox" className="checkbox" name="checkbox" />
//                 </div>
//                 <button type="button" className="_hover03">
//                   <a href="#popExit">Выйти</a>
//                 </button>
//               </PopupUserSet>
//             )}
//           </Nav>
//         </HeaderBlock>
//       </Container>
//     </SHeader>
//   );
// };

// export default Header;

// код до стилизации компонента

// import { useState } from "react";

// const Header = () => {
//   const [open, setOpen] = useState(false);

//   const togglePopup = () => {
//     setOpen((prev) => !prev);
//   };
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
//             <a
//               href="#user-set-target"
//               onClick={togglePopup}
//               className="header__user _hover02"
//             >
//               Ivan Ivanov
//             </a>

//             {open && (
//               <div
//                 className="header__pop-user-set pop-user-set"
//                 id="user-set-target"
//               >
//                 <p className="pop-user-set__name">Ivan Ivanov</p>
//                 <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
//                 <div className="pop-user-set__theme">
//                   <p>Темная тема</p>
//                   <input type="checkbox" className="checkbox" name="checkbox" />
//                 </div>
//                 <button type="button" className="_hover03">
//                   <a href="#popExit">Выйти</a>
//                 </button>
//               </div>
//             )}
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };
// export default Header;

// код, где выносим попап в отдельный компонент

// import { useState } from "react";
// import PopUser2 from "../popups/PopUser/PopUser2";

// const Header = () => {
//   const [open, setOpen] = useState(false);

//   const togglePopup = () => {
//     setOpen((prev) => !prev);
//   };

//   return (
//     <header className="header">
//       <div className="container">
//         <div className="header__block">
//           <div className="header__logo _show _light">
//             <a href="#" target="_self">
//               <img src="images/logo.png" alt="logo" />
//             </a>
//           </div>
//           <div className="header__logo _dark">
//             <a href="#" target="_self">
//               <img src="images/logo_dark.png" alt="logo" />
//             </a>
//           </div>
//           <nav className="header__nav">
//             <button className="header__btn-main-new _hover01" id="btnMainNew">
//               <a href="#popNewCard">Создать новую задачу</a>
//             </button>

//             <a
//               href="#user-set-target"
//               onClick={togglePopup}
//               className="header__user _hover02"
//             >
//               Ivan Ivanov
//             </a>

//             {/* <button
//               onClick={togglePopup}
//               className="header__user _hover02"
//             >
//               Ivan Ivanov
//             </button> */}

//             {open && <PopUser2 onClose={togglePopup} />}
//           </nav>
//         </div>
//       </div>
//     </header>
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
