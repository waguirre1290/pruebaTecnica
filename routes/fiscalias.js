var express = require('express');
var router = express.Router();
const fiscaliasController = require("../controllers/fiscaliasController");

/* GET home page. */
router.get('/', fiscaliasController.index);
router.get('/crear', fiscaliasController.crear);
router.post('/', fiscaliasController.guardar);
router.post('/eliminar/:id', fiscaliasController.eliminar);
router.post('/editar/:id', fiscaliasController.editar);

router.post('/actualizar', fiscaliasController.actualizar);

module.exports = router;
