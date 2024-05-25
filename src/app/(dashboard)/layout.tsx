import { isAuthenticate } from "@/lib/auth";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAuth = await isAuthenticate();
  console.log(isAuth);
  return <>{children}</>;
}
