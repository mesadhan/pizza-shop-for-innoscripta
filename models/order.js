'use strict';
const {
  Model
} = require('sequelize');

const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Order.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    pizzas: Sequelize.ARRAY(Sequelize.JSON),
    zipcode: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    pizzaCost: DataTypes.DOUBLE,
    deliveryCost: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};