'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Profile.belongsTo(models.User, {foreignKey: 'UserId'});
    }
  }
  Profile.init({
    name: {
      type:DataTypes.STRING,
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
    dateOfBirth: {
      type:DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Date of Birth is required'
        },
        notNull: {
          msg: 'Date of Birth is required'
        }
      }
    },
    photoProfile: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Photo Profile is required'
        },
        notNull: {
          msg: 'Photo Profile is required'
        }
      }
    },
    phoneNumber: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Phone Number is required'
        },
        notNull: {
          msg: 'Phone Number is required'
        }
      }
    },
    address: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Address is required'
        },
        notNull: {
          msg: 'Address is required'
        }
      }
    },
    UserId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};