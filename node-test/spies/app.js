var db = require('./db.js');
module.exports.handleSignup = (email, password) => {
    //Check if e-mail already exists
    db.saveUser({email,password});
    //send the welcome email
};