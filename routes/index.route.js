const { Router } = require("express")
const { renderIndex } = require("../controlers/index.controls")
const router = Router();
const pool = require("./database")
const path = require("path");
const passport = require("passport")
    //-----------------------ruta inicial-----------------------------//
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/html/index.html'));
});


//-----------------------seginta rutra/registro de usuario-------------------------//
router.get("/registro", function(req, res, next) {
    res.render("links/registro");
});


//-----------------------seginda rutra/ingresar-------------------------//
router.get("/login", function(req, res, next) {
    res.render("links/login");
});


router.get("/registro/compra", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/formularioC.html'));
});

router.get("/venta", (req, res) => {
    res.render("links/vender");
});


router.get("/porfile", async(req, res) => {
    res.render("links/perfil");
});


module.exports = router;