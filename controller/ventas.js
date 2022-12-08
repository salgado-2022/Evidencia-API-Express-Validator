const { response } = require('express')
const Ventas = require('../models/ventas')

//Obtener
const getVentas = async (req, res) => {

    const ventas = await Ventas.find()//Consultar todos los documentos
    res.json({
        msg: 'GET API Ventas',
        ventas
    })
}

//Enviar
const postVentas = async (req, res) => {
    //Desestructuración
    const { nombre, productos, Precio, estado } = req.body
    const venta = new Ventas({ nombre, productos, Precio, estado })
    await venta.save()//Guardar en la base de datos
    res.json({
        msg: 'POST API Ventas',
        venta
    })
}

//Modificar todos los valores
const putVentas = async (req, res) => {
    //Desestructuracion
    const { nombre, productos, Precio, estado } = req.body
    const venta = await Ventas.findOneAndUpdate({ nombre: nombre },{productos:productos,Precio:Precio,estado:estado})
    
    res.json({
        msg: "PUT API Ventas",
        venta
    })
}


//Eliminar
const deleteVentas = async (req, res) => {
    const { nombre } = req.query

    const venta = await Ventas.findOneAndDelete({ nombre: nombre })//ANTES DE LOS DOS PUNTOS ES PARAMETRO Y DESPUES DE LOS DOS PUNTOS ES LA VARIABLE

    res.json({
        msg: 'DELETE API Ventas',
        venta
    })
}

module.exports = {
    getVentas,
    postVentas,
    putVentas,
    deleteVentas

}
