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
        isUppercase: true
      }
    },
    flightNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    inService: DataTypes.BOOLEAN,
    maxNumPassengers: DataTypes.INTEGER,
    currentNumPassengers: DataTypes.INTEGER,
    firstFlightDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Airplane',
  });
  return Airplane;
};
