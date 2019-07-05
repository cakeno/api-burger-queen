const router = require('express').Router()
const models = require('../models/')
const Menu = models.Menu;

router.post("/", (req, resp) => {
    Menu.create(req.body)
        .then(o => {
            resp.send(o.dataValues)
        })
})