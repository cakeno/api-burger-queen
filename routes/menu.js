const router = require('express').Router()
const models = require('../models/')
const Menu = models.Menu;

router.get("/", (req, res) => {
    Menu.findAll()
    .then(r => res.send(r.dataValues))
})

router.post("/", (req, res) => {
    Menu.create(req.body)
        .then(o => {
            res.send(o.dataValues)
        })
})

router.delete("/:productid", (req, res) => {
    User.destroy({where: {productid: req.params.productid}})
    .then(() => res.sendStatus(200))
})

module.exports = router;