const { Router } = require('express')
const router = Router() //Obtener la función Router
const { check } = require('express-validator')

const { getUsuario, postUsuario, putUsuario, deleteUsuario } = require('../controller/usuario')
const { validarCampos } = require('../middelewares/validar-campos')

router.get('/', getUsuario)
router.post('/', [
    check('nombre', 'El nombre es obligatorio!!').not().isEmpty(),
    check('password', 'El password debe ser de más de 4 caracteres ').isLength({ min: 4 }),
    validarCampos
],
    postUsuario)

router.put('/', [
    check('nombre', 'El nombre es obligatoria para hacer la modificación').not().isEmpty(),
    check('password', 'El password debe ser de más de 4 caracteres ').isLength({ min: 4 }),
    validarCampos
],
    putUsuario)

router.delete('/', deleteUsuario)

module.exports = router