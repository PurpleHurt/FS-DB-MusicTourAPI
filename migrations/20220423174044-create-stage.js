'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stages', {
      stage_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false
      },
      stage_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('stages');
  }
};