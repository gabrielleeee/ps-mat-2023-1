'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('products', {
      fields: ['supplier_id'],      //Campo(s) da tabela de origem
      type: 'foreign key',
      name: 'products_suppliers_fk',    //nome da chave estrangeira (deve ser úniuco no BD)
      references: {
        table: 'suppliers',        //Tabela estrangeira
        field: 'id'             //Campo da tabela estrangeira
      },
      onDelete: 'RESTRICT',     //Não deixa apagar um supplier em uso no customer
      onUpdate: 'CASCADE'       //Atualiza supplier_id em products se id em supplier mudar
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('products', 'products_suppliers_fk')
  }
};
