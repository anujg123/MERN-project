const mongoose = require ("mongoose");

const UserSchema = mongoose.Schema({
    fname:{
        type: String,
    },
    lname:{
        type: String
    },
    email:{
        type: String,
    },
    password:{
        type: String,
    },
    repassword:{
        String
    },
});

module.exports = mongoose.model("user", UserSchema)