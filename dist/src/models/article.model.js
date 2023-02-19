"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// export interface IArticleInstance extends IArticleAttributes {}
module.exports = (sequelize, DataTypes) => {
    class Article extends sequelize_1.Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        id;
        title;
        text;
        type;
        static associate(models) {
            // define association here
            Article.belongsTo(models.User);
        }
    }
    Article.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: sequelize_1.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        text: {
            type: DataTypes.STRING(500),
        },
    }, {
        sequelize,
        modelName: "Article",
    });
    return Article;
};
