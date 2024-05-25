import sql from "better-sqlite3";

const db = sql("auth.sql");

export type UserType = {
  id: number;
  email: string;
};

export type SessionType = {
  id: number;
  expiresAt: Date;
  user_id: number;
};

export type TokenType = {
  id: number;
  session_id: number;
  expiresAt: Date;
};

db.exec(`
   CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY,
      email TEXT NOT NULL
    )
`);
db.exec(`
   CREATE TABLE IF NOT EXISTS sessions (
      id TEXT NOT NULL PRIMARY KEY,
      expires_at INTERGER NOT NULL,
      user_id TEXT NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
`);
db.exec(`
   CREATE TABLE IF NOT EXISTS tokens (
      id INTEGER NOT NULL PRIMARY KEY,
      jwt_token TEXT NOT NULL,
      expires_at INTERGER NOT NULL,
      session_id TEXT NOT NULL,
      FOREIGN KEY (session_id) REFERENCES sessions(id)
    )
`);

export default db;
