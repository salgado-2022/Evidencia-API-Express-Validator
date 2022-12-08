const mongoose = require('mongoose')//incluir la carpeta mongoose

const dbconnection = async () => {
    try {
        mongoose.connect(process.env.MONGODB_CNN)
        console.log('Conectado')
    }
    catch (err) {
        console.log('Error conectando a la base de datos')
    }
}


module.exports = dbconnection
