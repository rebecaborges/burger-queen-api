const router = require('express').Router();
const Order = require('../controllers/orders');

router.get('/', Order.getOrders);
router.get('/:id', Order.getOrdersById);
router.post('/', Order.postOrders);
router.put('/:id', Order.putOrders);
router.delete('/:id', Order.deleteOrders);

module.exports = router;


// const router = require('express').Router();
// const models = require('../models');
// const Orders = models.Orders;

// router.get("/", (req, resp) => {
//   Orders.findAll()
//   .then(orders => {orders.dataValues
//     resp.send(orders)
//  })
// })

// router.get("/:id", (req,resp) => {
//   Orders.findByPk({
//     where: {id: req.params.id}
//   })
//   .then(
//     order => {
//       resp.send(order)
//   })
// })

// module.exports = router;