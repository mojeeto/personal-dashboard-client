import { isAuthenticate } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAuth = await isAuthenticate();
  if (!isAuth) redirect("/login");
  return <>{children}</>;
}
