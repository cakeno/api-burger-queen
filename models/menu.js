'use strict';
module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    menuId: DataTypes.INTEGER,
    product: DataTypes.STRING,
    price: DataTypes.REAL,
    ingredients: DataTypes.STRING,
    extra: DataTypes.STRING
  }, {});

  Menu.associate = function(models) {
    Menu.hasMany(models.OrdersMenu, { 
      foreignKey: 'menuId'
    })
  };

  // Menu.create({
  //   product: "Hambúrguer simples",
  //   price: 10,
  //   ingredients: [ "bovina", "frango", "vegetariano"],
  // })

  return Menu;
};