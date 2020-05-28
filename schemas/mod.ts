import { Database } from "../deps.ts";

import { User } from "./auth.ts";

/*
const db = new Database("mysql", {
  host: "localhost",
  username: "root",
  password: "123456",
  database: "conduit",
  port: 3306,
});*/

const db = new Database("sqlite3", {
  filepath: "./db.sqlite",
});

db.link([User]);

await db.sync();

export { User };
