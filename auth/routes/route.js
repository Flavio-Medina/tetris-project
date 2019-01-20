const express = require("express")
const router = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const User = require('../../config/database/models/modelUser')
const High = require('../../config/database/models/modelScoring')
const checkAuth = require('../check-auth')

router.use(cors())

process.env.SECRET_KEY = 'F82k9yU8m1xEb0X'

router.post('/register', (req, res) => {
    const userData = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    }
    if (!req.body.password) {
        res.json({ error: 'Password is mandatory!' })
    } else {
        User.findOne({
            username: req.body.username
        })
            .then(user => {
                if (!user) {
                    bcrypt.hash(req.body.password, 10, (err, hash) => {
                        userData.password = hash
                        User.create(userData)
                            .then(user => {
                                res.json({ status: user.username + ' has been registered. Welcome to Tetris!', username: user.username })
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
    }
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




router.post('/highscore', (req, res) => {
    const userScoringData = {
        username: req.body.username,
        lines: req.body.lines,
        score: req.body.score
    }
    High.findOne({
        username: req.body.username
    })
    High.create(userScoringData)
        .then(user => {
            res.json({ status: user.username + ' has: ' + user.score + ' points (' + user.lines + ' lines)' })
        })
        .catch(err => {
            res.send('error: ' + err)
        })
}
);


router.get('/highscore', (req, res) => {
    High.find({}, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
});


module.exports = router;