const express = require("express")
const cors = require('cors')
const dbConnection = require('../database/config')

class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.usuariosPath = "/api/usuarios"
        this.ventasPath = "/api/ventas"
        this.insumosPath = "/api/insumos"
        this.authPath = "/api/auth"
        this.middlewares()
        this.routes()
        this.dbConectar()
    }
    async dbConectar(){
        await dbConnection()
    }
    middlewares(){
        this.app.use(cors())
        this.app.use(express.static("public"))
        this.app.use(express.json())
    }

    routes(){
        this.app.use(this.authPath, require("../routes/auth"))
        this.app.use(this.usuariosPath, require("../routes/usuarios"))
        this.app.use(this.ventasPath, require("../routes/ventas"))
        this.app.use(this.insumosPath, require("../routes/insumos"))
    }

    listen(){

        this.app.listen(this.port,()=>{
            console.log(`Escuchando desde http://localhost:${this.port}`)
        })
    }

}

module.exports = Server