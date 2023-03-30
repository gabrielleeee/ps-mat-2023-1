'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // this.hasMany(models.CustomerTag, {
      //   foreignKey: 'tag_id',
      //   sourceKey: 'id',
      //   as: 'customers'
      // })

      this.belongsToMany(models.Customer, {
        through: 'customer_tags',     //Tabela intermediária
        foreignKey: 'tag_id',         //Chave strangeira da tabela iintermediaria
        otherKey: 'customer_id',
        as: 'customers'
      })

      this.belongsToMany(models.Order, {
        through: 'order_tags',     //Tabela intermediária
        foreignKey: 'order_id',         //Chave strangeira da tabela iintermediaria
        otherKey: 'tag_id',
        as: 'orders'
      })

      
    }
  }
  Tag.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.STRING(30)
    },
    color: {
      type: DataTypes.STRING(8)
    },
    type: {
      type: DataTypes.ENUM('C','O')
    },
  }, {
    sequelize,
    modelName: 'Tag',
    tableName: 'tags'
  });
  return Tag;
};