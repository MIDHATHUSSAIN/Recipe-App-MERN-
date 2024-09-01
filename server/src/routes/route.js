const express = require('express')



const router = express.Router()
const  {userReg,userLog} = require('../controller/controller.js')


router.post('/registration',userReg)
router.post('/login',userLog)




module.exports = {router}