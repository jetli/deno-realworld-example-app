/**
 * This module defines all routes of the app.
 */

import { Router, Request, Response } from "../deps.ts";
import { current, login } from "./auth.ts";
import { get } from "./articles.ts";

/** Default home page. */
const home = async ({ response }: { response: Response }) => {
  response.body = "Hello from deno!";
};

/** The routes of the app. */
export const router = new Router();

router
  .get("/", home);

router
  .get("/api/user", current)
  .post("/api/users/login", login);

router
  .get("/api/articles/:slug", get);
