const express = require('express');
const router = express.Router();
const userService = require('./user.service');

// routes
router.post('/auth/signin', signin);
router.post('/auth/signup', signup);
router.get('/', getAll);

module.exports = router;

function signin(req, res, next) {
    userService.signin(req.body)
        .then(user => res.json(user))
        .catch(next);
}

function signup(req, res, next) {
    userService.signup(req.body)
        .then(user => res.json(user))
        .catch(next);
}


function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(next);
}
