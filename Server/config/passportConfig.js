const User = require("../api/models/user");
const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
  passport.use(
    new localStrategy(async (username, password, done) => {
      try {
        const user = await User.findOne({ username });

        if (!user) {
          return done(null, false, { message: "User not found." });
        }
        if (user.password !== password)
          return done(null, false, { message: "Incorrrect Password" });
        return done(null, user);
      } catch (err) {
        return done(err, false);
      }
    })
  );

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });
  passport.deserializeUser((id, cb) => {
    User.findOne({ _id: id }, (err, user) => {
      const userInformation = {
        user,
      };
      cb(err, userInformation);
    });
  });
};
