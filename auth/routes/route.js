const express = require("express")
const router = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const User = require('../models/model')

router.use(cors())

process.env.SECRET_KEY = 'secret'

router.post('/register', (req, res) => {
    const userData = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    }

    User.findOne({
        username: req.body.username
    })
        .then(user => {
            if (!user) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userData.password = hash
                    User.create(userData)
                        .then(user => {
                            res.json({ status: user.username + ' has been registered. Welcome to Tetris!' })
                        })
                        .catch(err => {
                            res.send('error: ' + err)
                        })
                })
            } else {
                res.json({ error: 'User already exists. Please choose another username' })
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

router.post('/login', (req, res) => {
    User.findOne({
        username: req.body.username
    })
        .then(user => {
            if (user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    const payload = {
                        _id: user._id,
                        email: user.email
                    }
                    let JWTToken = jwt.sign(payload, process.env.SECRET_KEY, {
                        expiresIn: 1800
                    })
                    return res.status(200).json({
                        success: 'You are logged in. Welcome to Tetris',
                        token: JWTToken
                    })
                } else {
                    res.json({ error: 'User does not exist' })
                }
            } else {
                res.json({ error: 'User does not exist' })
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})
module.exports = router;