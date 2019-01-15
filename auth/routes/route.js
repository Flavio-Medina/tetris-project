const express = require('express');
const router = express.Router();
// const cors = require("cors");
// const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/model');
const jwt = require('jsonwebtoken');

router.post('/register', function (req, res) {
    bcrypt.hash(req.body.password, 10, function (err, hash) {
        if (err) {
            return res.status(500).json({
                error: err
            });
        }
        else {
            const user = new User({
                username: req.body.username,
                email: req.body.email,
                password: hash
            });
            user.save().then(function (result) {
                console.log(result);
                res.status(200).json({
                    success: 'New user has been created'
                });
            }).catch(error => {
                res.status(500).json({
                    error: err
                });
            });
        }
    });
});

router.post('/login', function (req, res) {
    User.findOne({ username: req.body.username })
        .exec()
        .then(function (user) {
            bcrypt.compare(req.body.password, user.password, function (err, result) {
                if (err) {
                    return res.status(401).json({
                        failed: 'Unauthorized Access'
                    });
                }
                if (result) {
                    const JWTToken = jwt.sign({
                        username: user.username,
                        email: user.email
                    },
                        'secret',
                        {
                            expiresIn: 1800
                        });
                    return res.status(200).json({
                        success: 'Welcome to the secret path',
                        token: JWTToken
                    });
                }
                return res.status(401).json({
                    failed: 'Unauthorized Access'
                });
            });
        })
        .catch(error => {
            res.status(500).json({
                error: error
            });
        });;
});

module.exports = router;