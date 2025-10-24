import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn, signUp } from "../../services/auth";
import { AuthContext } from "../../context/AuthContext";
import BaseButton from "../Button/Button";
import BaseInput from "../Input/Input";

import {
  SWrapper,
  SContainerSignIn,
  SModal,
  SModalBlock,
  SModalTtl,
  SModalFormLogin,
  SFormGroup,
} from "./AuthForm.styled";

const AuthForm = ({ isSignUp }) => { 
  const navigate = useNavigate();
  const { updateUserInfo } = useContext(AuthContext);
  // Получаем setUser из хука useContext

  const [formData, setFormData] = useState({
    name: "",
    login: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError("");
  };

  // простая клиентская валидация
  const validateForm = () => {
    if (isSignUp && !formData.name.trim()) {
      return "Введите имя";
    }
    if (!formData.login.trim()) {
      return "Введите email";
    }
    if (!formData.password.trim()) {
      return "Введите пароль";
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const user = !isSignUp
        ? await signIn({ login: formData.login, password: formData.password })
        : await signUp(formData);

      if (user) {
        updateUserInfo(user);
        navigate("/");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <SWrapper>
      <SContainerSignIn>
        <SModal>
          <SModalBlock>
            <SModalTtl>
              <h2>{isSignUp ? "Регистрация" : "Вход"}</h2>
            </SModalTtl>
            <SModalFormLogin onSubmit={handleSubmit}>
              {isSignUp && (
                <BaseInput
                  type="text"
                  name="name"
                  placeholder="Имя"
                  value={formData.name}
                  onChange={handleChange}
                />
              )}
              <BaseInput
                type="text"
                name="login"
                placeholder="Эл. почта"
                value={formData.login}
                onChange={handleChange}
              />
              <BaseInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={formData.password}
                onChange={handleChange}
              />

              {error && <p style={{ color: "red" }}>{error}</p>}

              <BaseButton
                type="secondary"
                fullWidth
                text={isSignUp ? "Зарегистрироваться" : "Войти"}
              />
              {!isSignUp ? (
                <SFormGroup>
                  <p>Нужно зарегистрироваться?</p>
                  <Link to="/sign-up">Регистрируйтесь здесь</Link>
                </SFormGroup>
              ) : (
                <SFormGroup>
                  <p>
                    Уже есть аккаунт? <Link to="/sign-in">Войдите здесь</Link>
                  </p>
                </SFormGroup>
              )}
            </SModalFormLogin>
          </SModalBlock>
        </SModal>
      </SContainerSignIn>
    </SWrapper>
  );
};

export default AuthForm;

// КОД ДО КОНТЕКСТА
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { signIn, signUp } from "../../services/auth";
// import BaseButton from "../Button/Button";
// import BaseInput from "../Input/Input";

// import {
//   SWrapper,
//   SContainerSignIn,
//   SModal,
//   SModalBlock,
//   SModalTtl,
//   SModalFormLogin,
//   SFormGroup,
// } from "./AuthForm.styled";

// const AuthForm = ({ isSignUp, setIsAuth }) => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     login: "",
//     password: "",
//   });

//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     setError("");
//   };

//   // простая клиентская валидация
//   const validateForm = () => {
//     if (isSignUp && !formData.name.trim()) {
//       return "Введите имя";
//     }
//     if (!formData.login.trim()) {
//       return "Введите email";
//     }
//     if (!formData.password.trim()) {
//       return "Введите пароль";
//     }
//     return null;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const validationError = validateForm();
//     if (validationError) {
//       setError(validationError);
//       return;
//     }

//     try {
//       const user = !isSignUp
//         ? await signIn({ login: formData.login, password: formData.password })
//         : await signUp(formData);

//       if (user) {
//         setIsAuth(true);
//         localStorage.setItem("userInfo", JSON.stringify(user));
//         navigate("/");
//       }
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <SWrapper>
//       <SContainerSignIn>
//         <SModal>
//           <SModalBlock>
//             <SModalTtl>
//               <h2>{isSignUp ? "Регистрация" : "Вход"}</h2>
//             </SModalTtl>
//             <SModalFormLogin onSubmit={handleSubmit}>
//               {isSignUp && (
//                 <BaseInput
//                   type="text"
//                   name="name"
//                   placeholder="Имя"
//                   value={formData.name}
//                   onChange={handleChange}
//                 />
//               )}
//               <BaseInput
//                 type="text"
//                 name="login"
//                 placeholder="Эл. почта"
//                 value={formData.login}
//                 onChange={handleChange}
//               />
//               <BaseInput
//                 type="password"
//                 name="password"
//                 placeholder="Пароль"
//                 value={formData.password}
//                 onChange={handleChange}
//               />

//               {error && <p style={{ color: "red" }}>{error}</p>}

//               <BaseButton
//                 type="secondary"
//                 fullWidth
//                 text={isSignUp ? "Зарегистрироваться" : "Войти"}
//               />
//               {!isSignUp ? (
//                 <SFormGroup>
//                   <p>Нужно зарегистрироваться?</p>
//                   <Link to="/sign-up">Регистрируйтесь здесь</Link>
//                 </SFormGroup>
//               ) : (
//                 <SFormGroup>
//                   <p>
//                     Уже есть аккаунт? <Link to="/sign-in">Войдите здесь</Link>
//                   </p>
//                 </SFormGroup>
//               )}
//             </SModalFormLogin>
//           </SModalBlock>
//         </SModal>
//       </SContainerSignIn>
//     </SWrapper>
//   );
// };

// export default AuthForm;

// простая валидация
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { signIn, signUp } from "../../services/auth";
// import BaseButton from "../Button/Button";
// import BaseInput from "../Input/Input";

// import {
//   SWrapper,
//   SContainerSignIn,
//   SModal,
//   SModalBlock,
//   SModalTtl,
//   SModalFormLogin,
//   SFormGroup,
// } from "./AuthForm.styled";

// const AuthForm = ({ isSignUp, setIsAuth }) => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     login: "",
//     password: "",
//   });

//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     setError("");
//   };

//   // простая клиентская валидация
//   const validateForm = () => {
//     if (isSignUp && !formData.name.trim()) {
//       return "Введите имя";
//     }
//     if (!formData.login.trim()) {
//       return "Введите email";
//     }
//     if (!formData.password.trim()) {
//       return "Введите пароль";
//     }
//     return null;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const validationError = validateForm();
//     if (validationError) {
//       setError(validationError);
//       return;
//     }

//     try {
//       const user = !isSignUp
//         ? await signIn({ login: formData.login, password: formData.password })
//         : await signUp(formData);

//       if (user) {
//         setIsAuth(true);
//         localStorage.setItem("userInfo", JSON.stringify(user));
//         navigate("/");
//       }
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <SWrapper>
//       <SContainerSignIn>
//         <SModal>
//           <SModalBlock>
//             <SModalTtl>
//               <h2>{isSignUp ? "Регистрация" : "Вход"}</h2>
//             </SModalTtl>
//             <SModalFormLogin onSubmit={handleSubmit}>
//               {isSignUp && (
//                 <BaseInput
//                   type="text"
//                   name="name"
//                   placeholder="Имя"
//                   value={formData.name}
//                   onChange={handleChange}
//                 />
//               )}
//               <BaseInput
//                 type="text"
//                 name="login"
//                 placeholder="Эл. почта"
//                 value={formData.login}
//                 onChange={handleChange}
//               />
//               <BaseInput
//                 type="password"
//                 name="password"
//                 placeholder="Пароль"
//                 value={formData.password}
//                 onChange={handleChange}
//               />

//               {error && <p style={{ color: "red" }}>{error}</p>}

//               <BaseButton
//                 type="secondary"
//                 fullWidth
//                 text={isSignUp ? "Зарегистрироваться" : "Войти"}
//               />
//               {!isSignUp ? (
//                 <SFormGroup>
//                   <p>Нужно зарегистрироваться?</p>
//                   <Link to="/sign-up">Регистрируйтесь здесь</Link>
//                 </SFormGroup>
//               ) : (
//                 <SFormGroup>
//                   <p>
//                     Уже есть аккаунт? <Link to="/sign-in">Войдите здесь</Link>
//                   </p>
//                 </SFormGroup>
//               )}
//             </SModalFormLogin>
//           </SModalBlock>
//         </SModal>
//       </SContainerSignIn>
//     </SWrapper>
//   );
// };

// export default AuthForm;

// рабочий код без валидации

// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { signIn, signUp } from "../../services/auth";
// import BaseButton from "../Button/Button";
// import BaseInput from "../Input/Input";

// import {
//   SWrapper,
//   SContainerSignIn,
//   SModal,
//   SModalBlock,
//   SModalTtl,
//   SModalFormLogin,
//   SFormGroup,
// } from "./AuthForm.styled";

// const AuthForm = ({ isSignUp, setIsAuth }) => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     login: "",
//     password: "",
//   });

//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     setError("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const user = !isSignUp
//         ? await signIn({ login: formData.login, password: formData.password })
//         : await signUp(formData);

//       if (user) {
//         setIsAuth(true);
//         localStorage.setItem("userInfo", JSON.stringify(user));
//         navigate("/");
//       }
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <SWrapper>
//       <SContainerSignIn>
//         <SModal>
//           <SModalBlock>
//             <SModalTtl>
//               <h2>{isSignUp ? "Регистрация" : "Вход"}</h2>
//             </SModalTtl>
//             <SModalFormLogin onSubmit={handleSubmit}>
//               {isSignUp && (
//                 <BaseInput
//                   type="text"
//                   name="name"
//                   placeholder="Имя"
//                   value={formData.name}
//                   onChange={handleChange}
//                 />
//               )}
//               <BaseInput
//                 type="text"
//                 name="login"
//                 placeholder="Эл. почта"
//                 value={formData.login}
//                 onChange={handleChange}
//               />
//               <BaseInput
//                 type="password"
//                 name="password"
//                 placeholder="Пароль"
//                 value={formData.password}
//                 onChange={handleChange}
//               />

//               {error && <p style={{ color: "red" }}>{error}</p>}

//               <BaseButton
//                 type="secondary"
//                 fullWidth
//                 text={isSignUp ? "Зарегистрироваться" : "Войти"}
//               />
//               {!isSignUp ? (
//                 <SFormGroup>
//                   <p>Нужно зарегистрироваться?</p>
//                   <Link to="/sign-up">Регистрируйтесь здесь</Link>
//                 </SFormGroup>
//               ) : (
//                 <SFormGroup>
//                   <p>
//                     Уже есть аккаунт? <Link to="/sign-in">Войдите здесь</Link>
//                   </p>
//                 </SFormGroup>
//               )}
//             </SModalFormLogin>
//           </SModalBlock>
//         </SModal>
//       </SContainerSignIn>
//     </SWrapper>
//   );
// };

// export default AuthForm;

// ДО РАБОТЫ С API

// import { Link, useNavigate } from "react-router-dom";
// import BaseButton from "../Button/Button";
// import BaseInput from "../Input/Input";

// import {
//   SWrapper,
//   SContainerSignIn,
//   SModal,
//   SModalBlock,
//   SModalTtl,
//   SModalFormLogin,
//   SFormGroup,
// } from "./AuthForm.styled";

// const AuthForm = ({ isSignUp, setIsAuth }) => {
//   const navigate = useNavigate();
//   const handleLogin = (e) => {
//     e.preventDefault();
//     setIsAuth(true);
//     navigate("/");
//   };

//   return (
//     <SWrapper className="wrapper">
//       <SContainerSignIn className="container-signin">
//         <SModal className="modal">
//           <SModalBlock className="modal__block">
//             <SModalTtl className="modal__ttl">
//               <h2 className="title">{isSignUp ? "Регистрация" : "Вход"}</h2>
//             </SModalTtl>
//             <SModalFormLogin
//               className="modal__form-login"
//               id="formLogIn"
//               action="#"
//             >
//               {isSignUp && (
//                 <BaseInput
//                   tag="input"
//                   className="modal__input"
//                   type="text"
//                   name="name"
//                   id="formname"
//                   placeholder="Имя"
//                 />
//               )}
//               <BaseInput
//                 tag="input"
//                 className="auth-input"
//                 type="text"
//                 name="login"
//                 id="formlogin"
//                 placeholder="Эл. почта"
//               />
//               <BaseInput
//                 tag="input"
//                 type="password"
//                 name="password"
//                 id="formpassword"
//                 placeholder="Пароль"
//               />
//               <BaseButton
//                 onClick={handleLogin}
//                 type="secondary"
//                 fullWidth={true}
//                 className="button-enter"
//                 text={isSignUp ? "Зарегистрироваться" : "Войти"}
//               />
//               {!isSignUp && (
//                 <SFormGroup className="form-group">
//                   <p>Нужно зарегистрироваться?</p>
//                   <Link to="/sign-up">Регистрируйтесь здесь</Link>
//                 </SFormGroup>
//               )}
//               {isSignUp && (
//                 <SFormGroup className="form-group">
//                   <p>
//                     Уже есть аккаунт? <Link to="/sign-in">Войдите здесь</Link>
//                   </p>
//                 </SFormGroup>
//               )}
//             </SModalFormLogin>
//           </SModalBlock>
//         </SModal>
//       </SContainerSignIn>
//     </SWrapper>
//   );
// };

// export default AuthForm;

// import { Link, useNavigate } from "react-router-dom";
// import BaseButton from "../Button/Button";
// import BaseInput from "../Input/Input";

// const AuthForm = ({ isSignUp, setIsAuth }) => {
//   const navigate = useNavigate();
//   const handleLogin = (e) => {
//     e.preventDefault();
//     setIsAuth(true);
//     navigate("/");
//   };

//   return (
//     <div className="bg">
//       <div className="modal">
//         <div className="logo">SkyPro-Kanban</div>
//         <div className="wrapper">
//           <h2 className="title">{isSignUp ? "Регистрация" : "Вход"}</h2>
//           <form className="form" id="form" action="#">
//             <div className="input-wrapper">
//               {isSignUp && (
//                 <BaseInput
//                   tag="input"
//                   className="auth-input"
//                   type="text"
//                   name="name"
//                   id="formname"
//                   placeholder="Имя"
//                 />
//               )}
//               <BaseInput
//                 tag="input"
//                 className="auth-input"
//                 type="text"
//                 name="login"
//                 id="formlogin"
//                 placeholder="Эл. почта"
//               />
//               <BaseInput
//                 tag="input"
//                 type="password"
//                 name="password"
//                 id="formpassword"
//                 placeholder="Пароль"
//               />
//             </div>

//             <BaseButton
//               onClick={handleLogin}
//               type="secondary"
//               fullWidth={true}
//               className="button-enter"
//               text={isSignUp ? "Зарегистрироваться" : "Войти"}
//             />
//             {!isSignUp && (
//               <div className="form-group">
//                 <p>Нужно зарегистрироваться?</p>
//                 <Link to="/sign-up">Регистрируйтесь здесь</Link>
//               </div>
//             )}
//             {isSignUp && (
//               <div className="form-group">
//                 <p>
//                   Уже есть аккаунт? <Link to="/sign-in">Войдите здесь</Link>
//                 </p>
//               </div>
//             )}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthForm;
