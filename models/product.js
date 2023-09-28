'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.User, { foreignKey: 'UserId' });
      Product.belongsToMany(models.Category, {
        through: 'ProductCategories',
        foreignKey: 'ProductId'
      });
    }
  }
  Product.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Name is required'
        },
        notNull: {
          msg: 'Name is required'
        }
      }
    },
    description: {
      type:DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Description is required'
        },
        notNull: {
          msg: 'Description is required'
        }
      }
    },
    price: {type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty:{
        msg: 'Price is required'
      },
      notNull:{
        msg: 'Price is required'
      }
    }

  },
    photo: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
