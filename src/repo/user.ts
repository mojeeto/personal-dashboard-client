import db, { UserType } from "@/lib/db";

export function createUser(email: string) {
  return db.prepare("INSERT INTO users (email) VALUES (?)").run(email)
    .lastInsertRowid;
}

export function getUserByEmail(email: string): UserType {
  return db.prepare("SELECT * FROM users WHERE email = ?").get(email);
}
