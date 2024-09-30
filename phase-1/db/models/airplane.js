'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Airplane.init({
    airlineCode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: false,
        isUppercase: true,
        len: [2,2],
      }
    },
    flightNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric: true,
        len: [1,4],
      }
    },
    inService: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    maxNumPassengers: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 2,
        max: 853,
      },
    },
    currentNumPassengers: {
      type: DataTypes.INTEGER,
      validate: {
        currentLessThanMax(currNum){
          if(this.maxNumPassengers < currNum) {
            throw new Error('Err msg optional');
          }
        },
        checkInService(currNum) {
          if(this.inService === false && currNum !== null) {
            throw new Error('currentNumPassengers must be null if inService is false');
          }
        },
        min: 0,
        max: 853,
      }
    },
    firstFlightDate: {
      type: DataTypes.DATE,
      validate: {
        isAfter: "2019-12-31",    // only allow date strings after a specific date
        isBefore: "2022-01-01",   // only allow before - non inclusive
      }
    }
  }, {
    sequelize,
    modelName: 'Airplane',
  });
  return Airplane;
};
