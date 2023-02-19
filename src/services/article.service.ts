import { ArticleAttributes } from "../types/models/article.model.types";
import db from "../models";
import { ArticlesBodyResponse } from "../types/controllers/article.controller.types";
import customError from "../utils/customError";
import articleErrors from "../utils/errors/article.errors"

export const createArticle = async (
  data: ArticleAttributes
): Promise<ArticleAttributes> => {
  const response: ArticleAttributes = await db.Article.create(data);
  return response;
};

export const fetchArticleById = async (
  id: string
): Promise<ArticleAttributes> => {

  const article: ArticleAttributes = await db.Article.findOne({
    where: { id }, raw: true
  });

  if (article == null) {
    customError(articleErrors.ArticleGetFailure);
  }
  return article;
};

export const updateArticle = async (
  id: string,
  title: string,
  text: string,
  type: string,
  UserId: string
): Promise<Number[]> => {
  const isValid = await db.Article.findOne({ where: { id }, raw: true });
  if (isValid == null) {
    customError(articleErrors.ArticleInvalid);
  }
  const response: Number[] = await db.Article.update(
    { id, title, text, type, UserId },
    { where: { id } }
  ).catch((error: Error) => {
    customError(articleErrors.ArticleUpdateFailure);
  });
  // delete cache
  // delCache(getArticleCacheKey)
  return response;
};

export const deleteArticle = async (
  id: string,
  UserId: string
): Promise<number> => {
  const response: number = await db.Article.destroy({ where: { id, UserId } });
  return response;
};


export const fetchArticleByAuthor = async (
  UserId: string
): Promise<ArticlesBodyResponse> => {
  const response: ArticlesBodyResponse = await db.Article.findAll({ where: { UserId }, raw: true });
  return response
}

export const fetchArticles = async (

) => {
  const data = await db.Article.findAll({
    include: [
      {
        model: db.User,
        attributes: [
          'id', 'name', 'surname'
        ]
      }
    ]
  })

  const response = { data: data }
  return response
}

export default {
  createArticle,
  fetchArticleById,
  updateArticle,
  deleteArticle,
  fetchArticleByAuthor,
  fetchArticles
};
