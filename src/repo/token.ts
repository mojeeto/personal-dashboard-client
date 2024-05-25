import db from "@/lib/db";

export function addToken(
  jwt_token: string,
  session_id: string,
  expires: string | number,
) {
  return db
    .prepare(
      "INSERT INTO tokens (jwt_token, session_id, expires_at) VALUES (?, ?, ?)",
    )
    .run(jwt_token, session_id, expires).lastInsertRowid;
}

export function removeToken(session_id: string) {
  return db.prepare("DELETE FROM tokens WHERE session_id = ?").run(session_id)
    .changes;
}

export function getToken(session_id: string) {
  return db
    .prepare("SELECT jwt_token FROM tokens where session_id = ?")
    .get(session_id);
}
