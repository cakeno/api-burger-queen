const router = require('express').Router()
const models = require('../models/')
const User = models.User;

router.post("/", (req, resp) => {
    User.create(req.body)
        .then(o => {
            resp.send(o.dataValues)
        })
})