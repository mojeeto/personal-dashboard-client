"use server";

import { createAuthSession } from "@/lib/auth";
import { createUser, getUserByEmail } from "@/repo/user";
import { redirect } from "next/navigation";

const API_URL = process.env.API_URL!;

export async function loginAction(email: string, password: string) {
  const request = await fetch(API_URL + "login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const response = await request.json();
  if (response.statusCode !== 200) {
    return {
      message: response.message,
    };
  }

  let userId = getUserByEmail(email)?.id.toString();
  if (!userId) userId = createUser(email).toString();

  createAuthSession(userId, response.data.jwt_token);
  redirect("/dashboard");
}

export async function signupAction(
  forename: string,
  surname: string,
  email: string,
  password: string,
) {
  const request = await fetch(API_URL + "signup", {
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
