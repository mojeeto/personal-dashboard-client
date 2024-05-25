import { Lucia } from "lucia";
import { BetterSqlite3Adapter } from "@lucia-auth/adapter-sqlite";
import db from "./db";
import { cookies } from "next/headers";
import { addToken, getToken, removeToken } from "@/repo/token";
import { cache } from "react";

const adapter = new BetterSqlite3Adapter(db, {
  user: "users",
  session: "sessions",
});

const lucia = new Lucia(adapter, {
  sessionCookie: {
    expires: false,
    attributes: {
      secure: process.env.NODE_ENV === "production",
    },
  },
});

export async function createAuthSession(userId: string, jwtToken: string) {
  const session = await lucia.createSession(userId, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  try {
    addToken(jwtToken, sessionCookie.value, sessionCookie.attributes.maxAge);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes,
    );
  } catch (err) {
    console.log(err);
    throw new Error("Error while authentication!");
  }
}

export const isAuthenticate = cache(async () => {
  const sessionCookie = cookies().get(lucia.sessionCookieName);
  if (!sessionCookie || !sessionCookie.value)
    return {
      user: null,
      session: null,
    };
  const sessionId = sessionCookie.value;
  const { user, session } = await lucia.validateSession(sessionId);
  const { jwt_token } = getToken(sessionId);
  return { user, session, jwt_token };
});