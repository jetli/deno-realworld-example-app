import { Request, Response } from "../deps.ts";

export const current = async ({ response }: { response: Response }) => {
  response.body = { email: "admin@example.com", username: "conduit" };
};

export const login = async (
  { request, response }: { request: Request; response: Response },
) => {
  const body = await request.body();
  const loginInfo: { email: string; password: string } = body.value;

  console.log(loginInfo.email);
  console.log(loginInfo.password);

  response.body = { email: "admin@example.com", username: "conduit" };
};
