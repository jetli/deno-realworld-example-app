import { Application } from "./deps.ts";
import { router } from "./routes/mod.ts";

/** The main entrance of the app. */
export async function run_app() {
  const app = new Application();

  app.use(router.routes());
  app.use(router.allowedMethods());

  console.log("Please visit http://localhost:8000");

  await app.listen({ port: 8000 });
}
