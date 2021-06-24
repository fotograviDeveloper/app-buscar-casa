const express = require("express");
const morgan = require("morgan");

const exphbs = require('express-handlebars');
const path = require("path");
const bodyParser = require("body-parser");
const myConnection = require("express-myconnection");
const passport = require("passport");
const cookie = require("cookie-parser");
const session = require("express-session");
const flash = require('connect-flash');
const mysql_session = require('express-mysql-session')
const { database } = require("./routes/keys");

//inisialisation
const app = express();
require("./lib/passport");


//setings


app.set('appName', "siker");


app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    linksDir: path.join(app.get("views"), "links"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
    helpers: require('./lib/handlebars')
}));
app.set("view engine", ".hbs");



app.use(bodyParser.json(myConnection));



//mideweres 
app.set(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new mysql_session(database)
}))


app.use(flash());
app.use(express.json());
app.use(morgan('dev'));
app.use((req, res, next) => {
    next();
});
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({ extended: true }));


//variables glovales
app.use((req, res, next) => {
    app.locals.success = req.flash('success');
    app.locals.message = req.flash('message');

    next();
})



//rutes


app.use(require("./routes/index.route.js"));
app.use(require("./routes/links"));
app.use(require("./routes/autentication"));



//public
app.use(express.static(__dirname + "/public"));



app.listen(app.get("port"), () => {
    console.log(app.get('appName'))
    console.log("server on port", app.get("port"));
});