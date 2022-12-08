const {Schema, model}= require('mongoose')

const InsumosSchema = Schema({
    nombre:{
        type:String,
        required: [true, 'El nombre es obligatorio']
    },
    Cantidad: {
        type: Number,
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

module.exports = model('Insumos', InsumosSchema)