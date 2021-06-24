const { Router } = require("express")

const router = Router();
const pool = require("./database");
const path = require("path");

//rejistro y opciones 



router.get("/preca", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/formularioC.html'));
});


module.exports = router