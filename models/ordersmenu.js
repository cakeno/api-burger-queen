'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrdersMenu = sequelize.define('OrdersMenu', {
    orderId: DataTypes.STRING,
    menuId: DataTypes.STRING,
    price: DataTypes.REAL,
    quantity: DataTypes.INTEGER,
  }, {});
  OrdersMenu.associate = function(models) {
    OrdersMenu.belongsTo(models.Orders, {
      foreignKEY: 'orderId'
    })
    OrdersMenu.Menu = OrdersMenu.belongsTo(models.Menu, {
      foreignKEY: 'menuId'
    })
  };
  return OrdersMenu;
};