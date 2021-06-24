const { Router } = require("express")
const passport = require("passport")
const router = Router();



router.post("/registro", passport.authenticate('local', {
    successRedirect: '/porfile',
    failureRedirect: '/registro',
    failureFlash: true
}));

router.post("/login", (req, res, next) => {
    passport.authenticate('local.login', {
        successRedirect: '/porfile',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next);
});

module.exports = router