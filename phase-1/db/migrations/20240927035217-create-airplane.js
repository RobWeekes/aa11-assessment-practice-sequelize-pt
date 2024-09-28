'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Airplanes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      airlineCode: {
        type: Sequelize.STRING
      },
      flightNumber: {
        type: Sequelize.STRING
      },
      inService: {
        type: Sequelize.BOOLEAN
      },
      maxNumPassengers: {
        type: Sequelize.INTEGER
      },
      currentNumPassengers: {
        type: Sequelize.INTEGER
      },
      firstFlightDate: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Airplanes');
  }
};