import { redirect } from "next/navigation";
import { isAuthenticate } from "@/lib/auth";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAuth = await isAuthenticate();
  if (isAuth && isAuth.jwt_token) {
    redirect("/dashboard");
  }
  return <>{children}</>;
}
