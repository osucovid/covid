const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const key = require('../../config/keys').secret;
const User = require('../../model/User');

module.exports = router;

router.post('/register', (req, res) => {
  let {name, username, email, password, confirm_password} = req.body;
  console.log(req.body);
  if(password !== confirm_password){
    return res.status(400).json({
      msg: "Passwords do not match."
    });
  };
  //check for unique Username
  User.findOne({username: username}).then(user => {
    if(user){
      return res.status(400).json({
        msg: "Username is already taken."
      });
    }
  });
  //check for unique email
  User.findOne({email: email}).then(user => {
    if(user){
      return res.status(400).json({
        msg: "Email is already registered. Did you forget your password"
      });
    }
  });
  // The data is valid and now we can register the user
  let newUser = new User({
    name,
    username,
    password,
    email
  });
  //Hash the password
  bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          console.log(newUser.password);
            if (err) throw err;
            newUser.password = hash;
            newUser.save().then(user => {
                return res.status(201).json({
                    success: true,
                    msg: "Hurry! User is now registered."
                });
            });
        });
    });
});

router.post('/login', (req, res) => {
  User.findOne({ username: req.body.username }).then(user => {
    if(!user){
      return res.status(404).json({
        msg: "Username not found.",
        success: false
      });
    }
    // If there is user we are now going to compare the Password
  bcrypt.compare(req.body.password, user.password).then(isMatch => {
    if(isMatch){
      // Users password is correct and we need to send the JSON token for that user
      const payload = {
        _id: user._id,
        username: user.username,
        name: user.name,
        email: user.email,
      }
      jwt.sign(payload, key, {
        expiresIn: 604800
      }, (err, token) => {
        res.status(200).json({
          success: true,
          token: 'Bearer ' + token,
          msg: "Hurry! You are now logged in!"
        })
      });
    }
    else{
      return res.status(404).json({
        msg: "Incorrect password.",
        success: false
      });
    }
  });
  });
});

router.get('/profile', passport.authenticate('jwt', {
  session: false
}), (req, res) => {
  return res.json({
    user: req.user
  });
});
