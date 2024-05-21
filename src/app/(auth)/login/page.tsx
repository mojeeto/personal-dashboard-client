import AuthForm from "@/components/auth/authForm";
import Box from "@/components/box";

export default function LoginPage() {
  return (
    <main>
      <Box title="Login" className="mx-auto mt-20">
        <AuthForm />
      </Box>
    </main>
  );
}
