import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn, signUp } from "../../services/auth";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";
import BaseButton from "../Button/Button";
import BaseInput from "../Input/Input";
import { toast } from "react-toastify";

import {
  SWrapper,
  SContainerSignIn,
  SModal,
  SModalBlock,
  SModalTtl,
  SModalFormLogin,
  SFormGroup,
  SErrorText,
} from "./AuthForm.styled";

const AuthForm = ({ isSignUp }) => {
  const navigate = useNavigate();
  const { updateUserInfo } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext); // получаем тему

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

  const validateForm = () => {
    if (isSignUp && !formData.name.trim()) return "Введите имя";
    if (!formData.login.trim()) return "Введите email";
    if (!formData.password.trim()) return "Введите пароль";
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
        updateUserInfo({
          name: user.name,
          email: user.email || user.login,
          token: user.token,
        });
        toast.success(`Привет, ${user.name}!`);
        navigate("/");
      }
    } catch (err) {
      if (err.message.includes("Network Error")) {
        setError("Сервер недоступен. Попробуйте позже.");
      } else {
        setError(err.message || "Ошибка при авторизации.");
      }
      toast.error(err.message || "Ошибка при авторизации.");
    }
  };

  return (
    <SWrapper $themeMode={theme}>
      <SContainerSignIn>
        <SModal>
          <SModalBlock $themeMode={theme}>
            <SModalTtl $themeMode={theme}>
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

              {error && <SErrorText $themeMode={theme}>{error}</SErrorText>}

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
