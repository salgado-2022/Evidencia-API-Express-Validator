const { Router } = require('express')
const router = Router() //Obtener la función Router
const { check } = require('express-validator')

const { getVentas,postVentas,putVentas,deleteVentas  } = require('../controller/ventas')
const { validarCampos } = require('../middelewares/validar-campos')

router.get('/',getVentas)
router.post('/', [
    check('nombre', 'El nombre es obligatorio!!').not().isEmpty(),
    check('productos', 'Los productos son obligatorios!!').not().isEmpty(),
    validarCampos
],
postVentas)

router.put('/',[
    check('nombre','El nombre es obligatoria para hacer la modificación').not().isEmpty(),
    validarCampos
],
putVentas)

router.delete('/',deleteVentas)

module.exports = router