'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductCategories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductCategories.belongsTo(models.Product, {
        foreignKey: 'ProductId'
      });
      ProductCategories.belongsTo(models.Category, {
        foreignKey: 'CategoryId'
      });
    }
  }
  ProductCategories.init({
    ProductId: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductCategories',
  });
  return ProductCategories;
};