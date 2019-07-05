const router = require('express').Router()
const models = require('../models/')
const Orders = models.Orders;
const User = models.User;
const OrdersMenu = models.OrdersMenu;

router.post("/", (req, res) => {
    Orders.create(req.body, {include: [OrdersMenu]})
        .then(o => {
            res.send(o.dataValues)
        })
})

router.put("/:id", (req, res) => {
    Orders.findByPk(req.params.id, {include: [User, { association: Orders.OrdersMenus, include: [OrdersMenu.Menu]}]})
        .then(o => o.update(req.body)
            .then(r => res.send(r.dataValues))
        )
})

module.exports = router;