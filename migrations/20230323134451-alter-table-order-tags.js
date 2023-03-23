'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('order_tags', {
      fields: ['tag_id'],      //Campo(s) da tabela de origem
      type: 'foreign key',
      name: 'order_tags_tags_fk',    //nome da chave estrangeira (deve ser úniuco no BD)
      references: {
        table: 'tags',        //Tabela estrangeira
        field: 'id'             //Campo da tabela estrangeira
      },
      onDelete: 'RESTRICT',     //Não deixa apagar um customer em uso no customer_tags
      onUpdate: 'CASCADE'       //Atualiza tag_id em customer_tags se id em tags mudar
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('order_tags', 'order_tags_tags_fk')
  }
};
