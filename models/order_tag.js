'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Order, {
        foreignKey: 'order_id',      //Nome do campo na tabla de ORIGEM
        targetKey: 'id',                //Nome do campo na tabela de DESTINO
        as: 'order'                  //Nome do atributos para exibição
      })
      this.belongsTo(models.Tag, {
        foreignKey: 'tag_id',
        targetKey: 'id',
        as: 'tag'
      })
    }
  }
  OrderTag.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'OrderTag',
    tableName: 'order_tags'
  });
  return OrderTag;
};