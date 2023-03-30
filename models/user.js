'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Order, {
        through: 'order_rel_statuses',     //Tabela intermediária
        foreignKey: 'order_id',         //Chave strangeira da tabela iintermediaria
        otherKey: 'order_status_id',
        otherKey: 'user_id',
        as: 'orders'
      })

      this.belongsToMany(models.OrderStatus, {
        through: 'order_rel_statuses',     //Tabela intermediária
        foreignKey: 'order_status_id',         //Chave strangeira da tabela iintermediaria
        otherKey: 'order_id',
        otherKey:'user_id',
        as: 'order_status'
      })
    }
  }
  User.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    verified_email: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default: false,
    },
    is_admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default: false   //valor padrão do campo
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};