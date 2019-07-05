const router = require('express').Router()
const models = require('../models/')
const User = models.User;

router.get("/", (req, res) => {
    User.findAll()
    .then(r => res.send(r.dataValues))
})

router.get("/:id", (req, res) => {
    User.findByPk(req.params.id)
    .then(r => res.send(r.dataValues))
})

router.post("/", (req, res) => {
    User.create(req.body)
        .then(o => {
            res.send(o.dataValues)
        })
})

router.put("/:id", (req, res) => {
    User.findByPk(req.params.id)
    .then(u => u.update(req.body)
        .then(r => res.send(r.dataValues))
        )
})

router.delete("/:id", (req, res) => {
    User.destroy({where: {id: req.params.id}})
    .then(() => res.sendStatus(200))
})

module.exports = router;