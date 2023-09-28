'use strict';
const bcrypt = require('bcryptjs');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Profile, {foreignKey: 'UserId'});
      User.hasMany(models.Product, {foreignKey: 'UserId'});
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty:{
          msg: 'Username cannot be empty'
        },
        notNull:{
          msg: 'Username cannot be empty'
        }
      }
    },
    email: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: 'Email is invalid'
        },
        notEmpty: {
          msg: 'Email cannot be empty'
        },
        notNull: {
          msg: 'Email cannot be empty'
        },
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty:{
          msg: 'Password cannot be empty'
        },
        notNull: {
          msg: 'Password cannot be empty'
        },
        len: {
          args: [6],
          msg: 'Password must be at least 6 characters long'
        }
      }
    },
    role: DataTypes.STRING
  }, {
    hooks:{
      beforeCreate(instance, options) {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(instance.password, salt);
        instance.password = hash;
      }
    },
    sequelize,
    modelName: 'User',
  });
  // User.addHook( 'beforeCreate', (user, options) => {
  //   user.password = bcrypt.hashSync(user.password, 10);
  // })
  return User;
};