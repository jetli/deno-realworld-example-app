import { Router } from "../deps.ts";

export const router = new Router();

router
  .get("/", (context) => {
    context.response.body = "Hello from deno!";
  });
