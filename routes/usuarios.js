const {Router} = require("express");

const {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
} = require("../controllers/usuarios");

const router = Router();

//localhost:3001/usuarios/
router.post("/", usuariosGet); 
router.post("/", usuariosPost);
router.post("/", usuariosPut);
router.post("/", usuariosDelete);
router.post("/signin", usuarioSignin);
module.exports = router;