import { FastifyRequest } from "fastify";
import { AuthLoginBodyResponse } from "../types/controllers/auth.controller.types";
import { userService } from "../services";

export const handleUserProfile = async (
  request: FastifyRequest
): Promise<AuthLoginBodyResponse> => {
  const { UserId } = request;
  const user: AuthLoginBodyResponse = await userService.getUserById(UserId!);
  return user;
};

export default {
  handleUserProfile,
};
