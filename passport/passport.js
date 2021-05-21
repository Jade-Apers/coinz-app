const passport = require('passport');
const User = require('../models/User');

// CHANGE: USE "createStrategy" INSTEAD OF "authenticate"
passport.use(User.createStrategy());

//naar string is optioneel
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());