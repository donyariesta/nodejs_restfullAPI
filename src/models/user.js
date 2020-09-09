const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    id: String,
    userName: { type : String , required: true, unique : true, required : true, dropDups: true, index: true},
    accountNumber: { type : String , required: true, unique : true, required : true, dropDups: true, index: true},
    emailAddress: { type : String , required: true, unique : true, required : true, dropDups: true, index: true},
    identityNumber: { type : String , required: true, unique : true, required : true, dropDups: true, index: true}
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);
