'use strict';
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    status: DataTypes.STRING,
    uid: DataTypes.INTEGER
  }, {});
  Orders.associate = function(models) {
    Orders.belongsTo(models.User, {foreignKey: "uid"}),
    Orders.hasMany(models.OrderProducts, {foreignKey: "orderId"} )
  };

  sequelize.sync(
    Orders.create({
      status: "pronto",
      uid: 1
    })
  )

  return Orders;
};