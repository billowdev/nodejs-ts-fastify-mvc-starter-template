import { FastifyRequest } from "fastify";

export type AuthLoginBodyRequest = FastifyRequest<{
  Body: {
    email: string;
    password: string;
  };
}>;

export type AuthRegisterBodyRequest = FastifyRequest<{
  Body: {
    email: string;
    password: string;
    name: string;
    surname: string;
    phone: string;
  };
}>;

export interface AuthLoginBodyResponse {
  id: string;
  email: string;
  name: string;
  surname: string;
  phone: string;
  accessToken?: string;
}
