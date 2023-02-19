import { FastifyRequest } from "fastify";

export type ArticleCreateBodyRequest = FastifyRequest<{
  Body: {
    title?: string | undefined;
    text?: string | undefined;
    type?: string | undefined;
    userId?: string | undefined;
  };
}>;

export type ArticleUpdateBodyRequest = FastifyRequest<{
  Params: { id: string };
  Body: {
    id?: string;
    title?: string | undefined;
    text?: string | undefined;
    type?: string | undefined;
  };
}>;


export type ArticleGetRequest = FastifyRequest<{
  Querystring: { id: string };
}>;

export type ArticleDeleteRequest = FastifyRequest<{
  Params: { id: string };
}>;



export interface ArticlesBodyResponse {
  id: string
  title: string
  text: string
  createdAt: string
  updatedAt: string
  UserId: string
  User?: ArticleAuthor
}

export interface ArticleAuthor {
  id: string
  name: string
  surname: string
}
