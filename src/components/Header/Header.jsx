import { useState } from "react";
import {
  SHeader,
  Container,
  HeaderBlock,
  LogoLight,
  LogoDark,
  Nav,
  MainButton,
  UserLink,
  PopupUserSet,
} from "./Header.styled";

const Header = () => {
  const [open, setOpen] = useState(false);

  const togglePopup = () => {
    setOpen((prev) => !prev);
  };

  return (
    <SHeader>
      <Container>
        <HeaderBlock>
          <LogoLight className="_show _light">
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </LogoLight>
          <LogoDark className="_dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </LogoDark>

          <Nav>
            <MainButton className="_hover01" id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </MainButton>

            <UserLink
              href="#user-set-target"
              onClick={togglePopup}
              className="_hover02"
            >
              Ivan Ivanov
            </UserLink>

            {open && (
              <PopupUserSet id="user-set-target">
                <p className="pop-user-set__name">Ivan Ivanov</p>
                <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                <div className="pop-user-set__theme">
                  <p>Темная тема</p>
                  <input type="checkbox" className="checkbox" name="checkbox" />
                </div>
                <button type="button" className="_hover03">
                  <a href="#popExit">Выйти</a>
                </button>
              </PopupUserSet>
            )}
          </Nav>
        </HeaderBlock>
      </Container>
    </SHeader>
  );
};

export default Header;


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
