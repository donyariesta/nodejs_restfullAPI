const express = require('express')
const router = express.Router()
const userController = require('./controllers/user');
const jwt = require('jsonwebtoken');
const config = require('../config');

router.use('/api', function (req, res, next) {
    let token = req.get('authorization');

    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
    }

    if (token) {
        return jwt.verify(token, config.secret, (err, decoded) => {
            if (err) {
                res.send(err.message);
            } else {
                next();
            }
        });
    }

    return res.sendStatus(401);
});

router.get('/generateToken', userController.generateToken);
router.get('/api/users/', userController.findAll);
router.post('/api/users/', userController.create);
router.get('/api/users/:id', userController.findOne);
router.put('/api/users/:id', userController.update);
router.delete('/api/users/:id', userController.delete);
router.get('/api/users/accountNumber/:id', userController.getByAccountNumber);
router.get('/api/users/identityNumber/:id', userController.getByIdentityNumber);

module.exports = router
