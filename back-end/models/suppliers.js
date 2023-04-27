'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Suppliers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Products, {
        foreignKey: 'supplier_id',      //Campo da tabela estrangeira
        sourceKey: 'id',            //Campo da tabela local
        as: 'products'             //Nome do campo de associação (plural)
      }) 
    }
  }
  Suppliers.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false //ajuste do tamanho da string de acordo com o diagrama
    },
    address: {
      type: DataTypes.TEXT
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false //ajuste do tamanho da string de acordo com o diagrama
    },
  }, {
    sequelize,
    modelName: 'Suppliers',
    tableName: 'suppliers'
  });
  return Suppliers;
};