import AuthForm from "../AuthForm/AuthForm";

const SignUpPage = ({ setIsAuth }) => {
  return <AuthForm setIsAuth={setIsAuth} isSignUp={true} />;
};

export default SignUpPage;
