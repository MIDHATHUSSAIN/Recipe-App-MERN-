const express = require('express')
const Router = express.Router()
const {recipecreate} = require('../controller/recipe.controller')

Router.post('/',recipecreate)




module.exports = {Router}