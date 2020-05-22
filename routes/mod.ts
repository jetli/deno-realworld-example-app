import { Router, Request, Response } from "../deps.ts";
import { current, login } from "./auth.ts";

const home = async ({ response }: { response: Response }) => {
  response.body = "Hello from deno!";
};

export const router = new Router();

router
  .get("/", home)
  .get("/api/user", current)
  .post("/api/users/login", login);
