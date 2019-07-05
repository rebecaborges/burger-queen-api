const router = require('express').Router();
const models = require('../models');
const OrderProducts = models.OrderProducts;

router.get("/", (req, resp) => {
  OrderProducts.findAll()
  .then(orderProducts => {resp.send(orderProducts.dataValues)
  })
})



router.put("/")

module.exports = router;