import LoginForm from "./loginForm";
import SignupForm from "./signupForm";

interface AuthFormProps {
  mode?: "login" | "register";
}

const AuthForm: React.FC<AuthFormProps> = ({ mode = "login" }) => {
  if (mode === "login") return <LoginForm />;
  return <SignupForm />;
};

export default AuthForm;
