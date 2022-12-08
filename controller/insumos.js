const Insumos = require('../models/insumos')

//Obtener
const getInsumos = async (req, res) => {

    const ancheta = await Insumos.find()//Consultar todos los documentos
    res.json({
        msg: 'GET API Anchetas',
        ancheta
    })
}

//Enviar
const postInsumos = async (req, res) => {
    //Desestructuración
    const { nombre, Cantidad, Precio, estado } = req.body

    const insumo = new Insumos({ nombre, Cantidad, Precio, estado })

    await insumo.save()//Guardar en la base de datos

    res.json({
        msg: 'POST API Anchetas',
        insumo
    })
}

//Modificar todos los valores
const putInsumos = async (req, res) => {
    //Desestructuracion
    const { nombre, Cantidad, Precio, estado } = req.body
    const insumo = await Insumos.findOneAndUpdate({ nombre: nombre },{Cantidad:Cantidad,Precio:Precio,estado:estado})
    
    res.json({
        msg: "PUT API Insumos",
        insumo
    })
}


//Eliminar
const deleteInsumos = async (req, res) => {
    const { nombre } = req.query

    const ancheta = await Insumos.findOneAndDelete({ nombre: nombre })//ANTES DE LOS DOS PUNTOS ES PARAMETRO Y DESPUES DE LOS DOS PUNTOS ES LA VARIABLE

    res.json({
        msg: 'DELETE API Ancheta',
        ancheta
    })
}

module.exports = {
    getInsumos,
    postInsumos,
    putInsumos,
    deleteInsumos
}
