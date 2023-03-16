'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  //cria a chave estrangeira da tabela customers para a tabela cities
    await queryInterface.addConstraint('customers', {
      fields: ['city_id'],      //Campo(s) da tabela de origem
      type: 'foreign key',
      name: 'customers_cities_fk',    //nome da chave estrangeira (deve ser úniuco no BD)
      references: {
        table: 'cities',        //Tabela estrangeira
        field: 'id'             //Campo da tabela estrangeira
      },
      onDelete: 'RESTRICT',     //Não deixa apagar uma city em uso no customer
      onUpdate: 'CASCADE'       //Atualiza city_id em customer se id em city mudar
    })
  },

  async down (queryInterface, Sequelize) {
    //Reverte a alterações do up()

    await queryInterface.removeConstraint('customers', 'customers_cities_fk')
  }
};
