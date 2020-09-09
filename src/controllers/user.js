const User = require('../models/user.js');
const jwt = require('jsonwebtoken');
const config = require('../../config');

exports.generateToken = (req, res) => {
    var token = jwt.sign({},
            config.secret,
            { expiresIn: '24h' }
        );

    res.json({
        success: true,
        token: token
    });
};

exports.getByIdentityNumber = (req, res) => {
    User.findOne({identityNumber:req.params.id}).cache({ expire: 10 }).then(user => {
        res.send(user);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something went wrong while getting user."
        });
    });
};

exports.getByAccountNumber = (req, res) => {
    User.findOne({accountNumber:req.params.id}).cache({ expire: 10 }).then(user => {
        res.send(user);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something went wrong while getting user."
        });
    });
};

exports.findAll = (req, res) => {
    User.find().cache({ expire: 10 }).then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something went wrong while getting list of users."
        });
    });
};

exports.create = (req, res) => {
    if(!req.body) {
        return res.status(400).send({
            message: "Please fill all required field"
        });
    }

    const user = new User({
        userName: req.body.userName,
        accountNumber: req.body.accountNumber,
        emailAddress: req.body.emailAddress,
        identityNumber: req.body.identityNumber
    });

    user.save().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something went wrong while creating new user."
        });
    });
};

exports.findOne = (req, res) => {
    User.findById(req.params.id).then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.id
            });
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Error getting user with id " + req.params.id
        });
    });
};

exports.update = (req, res) => {
    if(!req.body) {
        return res.status(400).send({
            message: "Please fill all required field"
        });
    }
    User.findByIdAndUpdate(req.params.id, {
        userName: req.body.userName,
        accountNumber: req.body.accountNumber,
        emailAddress: req.body.emailAddress,
        identityNumber: req.body.identityNumber
    }, {new: true}).then(user => {
        if(!user) {
            return res.status(404).send({
                message: "user not found with id " + req.params.id
            });
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "user not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Error updating user with id " + req.params.id
        });
    });
};

exports.delete = (req, res) => {
    User.findByIdAndRemove(req.params.id).then(user => {
        if(!user) {
            return res.status(404).send({
                message: "user not found with id " + req.params.id
            });
        }
        res.send({message: "user deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "user not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Could not delete user with id " + req.params.id
        });
    });
};
