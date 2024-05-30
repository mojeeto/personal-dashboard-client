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

// TODO::Search about cookies and learn more about that
// how to secure them and protect them about copy cookie in other browsers

export async function createAuthSession(userId: string, jwtToken: string) {
  const userSessions = await lucia.getUserSessions(userId);
  let session;
  if (userSessions.length === 0)
    session = await lucia.createSession(userId, {});
  else session = userSessions[0];
  const sessionCookie = lucia.createSessionCookie(session.id);
  try {
    const token = getToken(session.id);
    if (!token) {
      addToken(jwtToken, sessionCookie.value, sessionCookie.attributes.maxAge!);
    }
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
  if (!sessionCookie || !sessionCookie.value) return false;
  const sessionId = sessionCookie.value;
  const { user, session } = await lucia.validateSession(sessionId);
  if (!user || !session) return false;
  const { jwt_token } = getToken(sessionId) as { jwt_token: string };
  if (!jwt_token) return false;
  return jwt_token;
});

export const getJWTToken = cache(async () => {
  const token = await isAuthenticate();
  return token ? token : "";
});
