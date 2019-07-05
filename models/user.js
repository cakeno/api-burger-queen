'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userId: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    service: DataTypes.STRING
  }, {});

  User.associate = function (models) {
    User.hasMany(models.Orders, {foreignKey: 'userId'})
  }

  // User.sync({force: true})

  // User.create({

  // })

  return User;
};