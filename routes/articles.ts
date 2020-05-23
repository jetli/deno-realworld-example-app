import { Request, Response } from "../deps.ts";

export const get = async (
  { params, response }: { params: { slug: string }; response: Response },
) => {
  const slug = params.slug;
  console.log(slug);

  response.body = { slug: "awesome-article", title: "Awesome article" };
};
