const router = require('express').Router()
const models = require('../models/')
const Menu = models.Menu;

router.post("/", (req, res) => {
    Menu.create(req.body)
        .then(o => {
            res.send(o.dataValues)
        })
})

module.exports = router;