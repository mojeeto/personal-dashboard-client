import Link from "next/link";

interface AuthFormProps {
  mode?: "login" | "register";
}

const AuthForm: React.FC<AuthFormProps> = ({ mode = "login" }) => {
  return (
    <form>
      <input type="email" name="email" required />
      <input type="password" name="password" required />
      <button>{mode.toUpperCase()}</button>
      <Link href={`/${mode}`}>
        {mode === "login" ? "Create New Account" : "Login with existing Email"}
      </Link>
    </form>
  );
};

export default AuthForm;
