const router = require('express').Router();
const passport = require('passport')
const userSchema = require("../models/user");


router.post("/register", (req, res) => {

    const fullName = req.body.fullName;
    const username = req.body.username;
    const companyName = req.body.companyName;
    const mobile = req.body.mobile;
    const password = req.body.password;
    const github = req.body.github;
    const dateOfBirth = req.body.dateOfBirth;
    userSchema.findOne({ username: username }, async (err, doc) => {
        if (err) throw err;

        if (!doc) {
            const user = new userSchema({
                fullName: fullName,
                username: username,
                companyName: companyName,
                mobile: mobile,
                password: password,
                github: github,
                dateOfBirth: dateOfBirth
            })
            await user.save();
            return res.status(200).json({ msg: "User Added SuccessFully" })
        }
        else if (doc) {
            return res.status(400).json({ msg: " User Already Exist" })
        }
    })
});
router.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) throw err;
        if (!user) return res.send({ message: info.message });
        else {
            req.logIn(user, (err) => {
                if (err) throw err;
                res.send("Successfully Authenticated");
                // console.log(req.user);
            });
        }
    })(req, res, next);
});


router.get("/user", (req, res) => {
    res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
});

module.exports = router;