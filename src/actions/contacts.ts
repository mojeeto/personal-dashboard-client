"use server";

import { getJWTToken } from "@/lib/auth";

const API_URL = process.env.API_URL!;
const TOKEN = await getJWTToken();

export async function getContacts() {
  const request = await fetch(API_URL + "contacts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Authorized ${TOKEN}`,
    },
  });

  return await request.json();
}

export async function postContact(
  name: string,
  phoneNumber: string,
  bankCartNumber: string,
) {
  const request = await fetch(API_URL + "contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      jwt_token: TOKEN,
      name,
      phoneNumber,
      bankCartNumber,
    }),
  });
  return await request.json();
}
