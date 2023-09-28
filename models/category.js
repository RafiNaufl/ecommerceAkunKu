'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.belongsToMany(models.Product, {
        through: 'ProductCategories',
        foreignKey: 'CategoryId'
      });
    }
  }
  Category.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:true,
      validate:{
        notEmpty:{
          msg:'Category name is required'
        },
        notNull:{
          msg:'Category name is required'
        },
        notUnique:{
          msg:'Category name already exists'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};
