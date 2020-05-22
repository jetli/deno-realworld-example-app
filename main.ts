import { Application } from "./deps.ts";

const app = new Application();

app.use((ctx) => {
  ctx.response.body = "Hello from deno!";
});

console.log("Please visit http://localhost:8000");

await app.listen({ port: 8000 });
