'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Suppliers, {
        foreignKey: 'supplier_id', //Nome do campo a tabela de ORIGEM
        targetKey: 'id',      //Nome do campo na tabela de DESTINO
        as: 'supplier'            //Nome do atributo para exibição
      })
    }
  }
  Products.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: false //ajuste do tamanho da string de acordo com o diagrama
    },
    quantity: { 
      type: DataTypes.DECIMAL(18,2),
      allowNull: false //ajuste da entrada do dcimal de acordo com o diagrama
    },
    unit: {
      type: DataTypes.ENUM("un","kg"),
      allowNull: false //ajuste da entrada do enum de acordo com o diagrama
    },
    supplier_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Products',
    tableName: 'products'
  });
  return Products;
};