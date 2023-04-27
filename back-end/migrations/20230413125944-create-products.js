'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING(100),
        allowNull: false //ajuste do tamanho da string de acordo com o diagrama
      },
      quantity: { 
        type: Sequelize.DECIMAL(18,2),
        allowNull: false //ajuste da entrada do dcimal de acordo com o diagrama
      },
      unit: {
        type: Sequelize.ENUM("un","kg"),
        allowNull: false //ajuste da entrada do enum de acordo com o diagrama
      },
      supplier_id: {
        type: Sequelize.INTEGER,
        allowNull: false
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
    await queryInterface.dropTable('products');
  }
};