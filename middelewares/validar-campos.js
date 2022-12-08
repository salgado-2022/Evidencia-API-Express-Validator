const { validationResult} = require('express-validator')

const validarCampos = (req, res, next) =>{
    const errors = validationResult(req)

    if(!errors.isEmpty()){//.isEmpty esta vacio //hay errores
        return res.status(400).json(errors)
    }
    //función de express validator
    next()//Si el campo cumple con la función anerior, entonces continua con el siguiente campo
}

module.exports = {
    validarCampos
}