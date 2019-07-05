const router = require('express').Router()
const models = require('../models/')
const Orders = models.Orders;
const User = models.User;
const OrdersMenu = models.OrdersMenu;

router.post("/orders", (req, resp) => {
    Orders.create(req.body, {include: [OrdersMenu]})
        .then(o => {
            resp.send(o.dataValues)
        })
})

router.put("/:id", (req, resp) => {
    Orders.findByPk(req.params.id, {include: [User, { association: Orders.OrdersMenus, include: [OrdersMenu.Menu]}]})
        .then(o => o.update(req.body)
            .then(r => resp.send(r.dataValues))
        )
})
