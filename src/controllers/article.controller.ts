import { FastifyRequest } from "fastify";
import { articleService } from "../services";
import {
  ArticleCreateBodyRequest,
  ArticleUpdateBodyRequest,
  ArticleGetRequest,
  ArticleDeleteRequest,
  ArticlesBodyResponse,
} from "../types/controllers/article.controller.types";
import customError from "../utils/customError";
import { ArticleAttributes } from "../types/models/article.model.types";
import articleErrors from "../utils/errors/article.errors";

export const handleCreate = async (
  request: ArticleCreateBodyRequest
): Promise<ArticleAttributes> => {
  const { UserId } = request;
  const { title, text, type } = request.body;
  const article: ArticleAttributes = await articleService
    .createArticle({ title, text, type, UserId })
    .catch((err) => {
      // console.error(["- DEBUG ERROR ON article -", err, "- DEBUG -"]);
      customError(articleErrors.ArticleCreateFailure);
      throw new Error();
    });
  return article;
};

export const handleGetArticles = async () => {
  const response = await articleService.fetchArticles()
  return response
}

export const handleGetByAuthor = async (request: FastifyRequest) => {
  const { UserId } = request;
  if (UserId) {
    const data: ArticlesBodyResponse = await articleService.fetchArticleByAuthor(UserId);
    const response = { data: data };
    return response;
  }
}

export const handleGetArticleById = async (
  request: ArticleGetRequest
): Promise<ArticleAttributes> => {
  const id = request.query.id;
  const article: ArticleAttributes = await articleService.fetchArticleById(id);
  return article;
};

export const handleUpdate = async (
  request: ArticleUpdateBodyRequest
): Promise<Number[]> => {
  const { title, text, type } = request.body;
  const id = request.params.id;
  const { UserId } = request;
  const article: Number[] = await articleService.updateArticle(
    id!,
    title!,
    text!,
    type!,
    UserId!
  );
  return article;
};

export const handleDelete = async (
  request: ArticleDeleteRequest
): Promise<number> => {
  const { UserId } = request;
  const id = request.params.id;
  console.log(id)
  const article: number = await articleService.deleteArticle(id, UserId!);
  return article;
};

export default {
  handleCreate,
  handleGetArticleById,
  handleUpdate,
  handleDelete,
  handleGetByAuthor,
  handleGetArticles
};
