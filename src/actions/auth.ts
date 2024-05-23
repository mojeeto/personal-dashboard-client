"use server";

export async function loginAction(email: string, password: string) {
  console.log(email, password);
}

export async function signupAction(
  forename: string,
  surname: string,
  email: string,
  password: string,
) {
  const request = await fetch("http://localhost:8080/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      forename,
      surname,
      email,
      password,
    }),
  });

  return await request.json();
}
