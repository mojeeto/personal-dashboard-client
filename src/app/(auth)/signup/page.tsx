import AuthForm from "@/components/auth/authForm";
import Box from "@/components/box";

export default function SignUpPage() {
  return (
    <main>
      <Box title="Register new Account" className="mx-auto mt-20">
        <AuthForm mode="register" />
      </Box>
    </main>
  );
}
