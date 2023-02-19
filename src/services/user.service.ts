import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import { UserAttributes } from "../types/models/user.model.types";
import customError from "../utils/customError";
import authErrors from "../utils/errors/auth.errors";
import config from "../config/config";
import { AuthLoginBodyResponse } from "../types/controllers/auth.controller.types";
import db from "../models";

const passwordHashing = (password: string): string => {
  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);
  return hashPassword;
};

const comparePassword = (password: string, existsPassword: string): boolean => {
  const isPasswordCorrect = bcrypt.compareSync(password, existsPassword);
  if (!isPasswordCorrect) {
    customError(authErrors.AuthInvalidPassword);
  }
  return true;
};

const createToken = (UserId: string): string => {
  const token = sign({}, config.webtoken as string, {
    expiresIn: 3600 * 30,
    audience: String(UserId),
  });
  return token;
};

const mapUserResponseObject = (
  userId: string,
  user: UserAttributes,
  accessToken?: string
): AuthLoginBodyResponse => {
  const response: AuthLoginBodyResponse = {
    id: userId,
    email: user.email,
    name: user.name || "",
    surname: user.surname || "",
    phone: user.phone || "",
    accessToken,
  };
  return response;
};

export const createUser = async (
  data: UserAttributes
): Promise<UserAttributes> => {
  data.password = passwordHashing(data.password);
  const user: UserAttributes = await db.User.create(data);
  return user;
};

export const userLogin = async (
  email: string,
  password: string
): Promise<AuthLoginBodyResponse> => {
  const user = await db.User.findOne({
    where: { email }, raw: true
  });
  if (user == null) {
    customError({
      ...authErrors.AuthInvalidEmail,
      data: {
        success: false,
      },
    });
  }
  // console.log("debugging", email, password, user)
  comparePassword(password, user.password);
  const UserId: string = user.id;
  const accessToken = createToken(UserId);
  const response: AuthLoginBodyResponse = mapUserResponseObject(
    UserId,
    user,
    accessToken
  );
  return response;
};

export const userSession = async (
  id: string,
): Promise<AuthLoginBodyResponse> => {
  const user = await db.User.findOne({
    where: { id }, raw: true
  });
  if (user == null) {
    customError({
      ...authErrors.AuthJWTError,
      data: {
        success: false,
      },
    });
  }
  const UserId: string = id;
  const accessToken = createToken(UserId);
  const response: AuthLoginBodyResponse = mapUserResponseObject(
    UserId,
    user,
    accessToken
  );
  return response;
};

export const getUserById = async (
  UserId: string
): Promise<AuthLoginBodyResponse> => {
  const user = await db.User.findOne({ where: { id: UserId }, raw: true });
  if (user == null) {
    return customError(authErrors.AuthJWTError);
  }
  const response: AuthLoginBodyResponse = mapUserResponseObject(UserId, user);
  return response;
};

export default {
  createUser,
  userLogin,
  getUserById,
  createToken,
  userSession
};
