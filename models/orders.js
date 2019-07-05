'use strict';
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    userId: DataTypes.STRING,
    orderId: DataTypes.STRING,
    clientName: DataTypes.STRING,
    table: DataTypes.INTEGER,
    item: DataTypes.STRING,
    total: DataTypes.REAL,
    status: DataTypes.STRING
  }, {});
  Orders.associate = function (models) {
    Orders.belongsTo(models.User, {foreignKey: 'userId'})
    Orders.OrdersMenus = Orders.hasMany(models.OrdersMenu, {foreignKey: 'orderId'})
  };

  // User.sync({force: true})

  return Orders;
};