const {Schema, model}= require('mongoose')

const VentasSchema = Schema({
    nombre:{
        type:String,
        required: [true, 'El nombre es obligatorio']
    },
    productos: {
        type: String,
        required: [true, 'Campo obligatorio']
    },
    Precio: {
        type: Number,
        required: [true, 'Campo obligatorio']
    },
    estado: {
        type: Boolean,
        defaul: true
    }
})

module.exports = model('ventas', VentasSchema)