const {Router} = require('express')
// const {check}=require('express-validator')
const router = Router()

const { login }= require('../controller/auth')

router.post('/login', login)

module.exports = router
