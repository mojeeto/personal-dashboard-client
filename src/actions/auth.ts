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
  console.log(forename, surname, email, password);
}
