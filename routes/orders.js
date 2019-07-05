const router = require('express').Router()
const models = require('../models/')
const Orders = models.Orders;
const User = models.User;
const OrdersMenu = models.OrdersMenu;

router.get("/", (req, res) => {
    Orders.findAll()
    .then(r => res.send(r.dataValues))
})

router.post("/", (req, res) => {
    Orders.create(req.body, {include: [OrdersMenu]})
        .then(o => {
            res.send(o.dataValues)
        })
})

router.put("/:orderid", (req, res) => {
    Orders.findByPk(req.params.orderid, {include: [User, { association: Orders.OrdersMenus, include: [OrdersMenu.Menu]}]})
        .then(o => o.update(req.body)
            .then(r => res.send(r.dataValues))
        )
})

router.delete("/:orderid", (req, res) => {
    User.destroy({where: {orderid: req.params.orderid}})
    .then(() => res.sendStatus(200))
})

module.exports = router;