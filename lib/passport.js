const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const pool = require("../routes/database");
const helpers = require('../lib/helpers');
const path = require("path");


// guardando nuevo usuario  en la DB 
passport.use(
    "local",
    new LocalStrategy({
            usernameField: "correo",
            passwordField: "password",
            passReqToCallback: true
        },
        async(req, correo, password, done) => {
            const { nombre, apellido, telefono } = req.body;

            let newUser = {
                nombre,
                apellido,
                password,
                correo,
                telefono
            };

            newUser.password = await helpers.encryptPassword(password);
            // Saving in the Database
            const result = await pool.query("INSERT INTO users SET ? ", newUser);
            newUser.id = result.insertId;
            return done(null, newUser);
        }
    )
);


passport.use(
    "local.login",
    new LocalStrategy({
            usernameField: "correo",
            passwordField: "password",
            passReqToCallback: true
        },
        async(req, correo, password, done) => {
            console.log(req.body)

            const rows = await pool.query("SELECT * FROM users Where correo = ?", [
                correo,
                console.log(correo)
            ]);
            if (rows.length > 0) {
                const user = rows[0];
                //aqui traigo matchpass desde helpers
                const validPassword = await helpers.matchPass(
                    password,
                    user.password

                );
                if (validPassword) {
                    done(null,
                        user,
                        req.flash("success", "Welcome ")
                    );
                } else {
                    done(null,
                        false,
                        req.flash("message", "Incorrect Password")
                    );
                }
            } else {
                return done(
                    null,
                    false,
                    req.flash("message", "The Username does not exists.")
                );
            }
        }
    )
);
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async(id, done) => {
    const rows = await pool.query("SELECT * FROM users WHERE id = ?", [id]);
    done(null, rows[0]);
});