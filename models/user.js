'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Orders, {foreignKey: 'uid'})
  };

  sequelize.sync(
    User.create({
      email: "purple@gmail.com"
    })
  )

  
  return User;
};