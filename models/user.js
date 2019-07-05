'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Orders, {foreignKey: "orderId"})
  };

  sequelize.sync(
    User.create({
      email: "neusa@gmail.com"
    })
  )

  return User;
};