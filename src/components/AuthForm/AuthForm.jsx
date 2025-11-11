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
        ? await signIn({
            login: formData.login.trim(),
            password: formData.password.trim(),
          })
        : await signUp({
            name: formData.name.trim(),
            login: formData.login.trim(),
            password: formData.password.trim(),
          });

      if (user) {
        updateUserInfo(user);
        navigate("/");
      }
    } catch (err) {
      // setError(err.message);

      // обработка ошибок сети
      if (err.message.includes("Network Error")) {
        setError("Сервер недоступен. Попробуйте позже.");
      } else {
        setError(err.message || "Ошибка при авторизации.");
      }
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

// import { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { signIn, signUp } from "../../services/auth";
// import { AuthContext } from "../../context/AuthContext";
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

// const AuthForm = ({ isSignUp }) => {
//   const navigate = useNavigate();
//   const { updateUserInfo } = useContext(AuthContext);
//   // Получаем setUser из хука useContext

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
//         updateUserInfo(user);
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
