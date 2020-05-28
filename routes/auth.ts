import { Request, Response } from "../deps.ts";

import { LoginInfo, UserInfo } from "../types/mod.ts";
import { User } from "../schemas/mod.ts";

/** Get the current user info. */
export const current = async ({ response }: { response: Response }) => {
  await User.create([{
    username: "jetli",
    email: "aaa@aaa.com",
    password: "aaa",
  }]);

  const user: UserInfo = await User.first();

  console.log(user.username);

  response.body = { email: "admin@example.com", username: "conduit" };
};

/** Login a user. */
export const login = async (
  { request, response }: { request: Request; response: Response },
) => {
  const body = await request.body();
  const loginInfo: LoginInfo = body.value;

  console.log(loginInfo.email);
  console.log(loginInfo.password);

  response.body = { email: "admin@example.com", username: "conduit" };
};
