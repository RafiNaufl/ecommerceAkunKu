'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ProductCategories extends Model {
    static associate(models) {
      
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
    CategoryId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'ProductCategories',
  });
  return ProductCategories;
};
