const { Router } = require('express')
const router = Router() //Obtener la función Router
const { check } = require('express-validator')

const { getInsumos,postInsumos,putInsumos,deleteInsumos  } = require('../controller/insumos')
const { validarCampos } = require('../middelewares/validar-campos')

router.get('/',getInsumos)
router.post('/', [
    check('nombre', 'El nombre es obligatorio!!').not().isEmpty(),
    check('Cantidad', 'Los productos son obligatorios!!').not().isEmpty(),
    validarCampos
],
postInsumos)

router.put('/',[
    check('nombre','El nombre es obligatoria para hacer la modificación').not().isEmpty(),
    validarCampos
],
putInsumos)

router.delete('/',deleteInsumos)

module.exports = router