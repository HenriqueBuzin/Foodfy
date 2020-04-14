const express = require('express')
const routes = express.Router()

routes.get('/', function(req, res) {
    return res.redirect("home")
})

routes.get('/home', function(req, res) {
    return res.render("home/index")
})


routes.get('/sobre', function(req, res) {
    return res.render("sobre/index")
})

routes.get('/receitas', function(req, res) {
    return res.render("receitas/index")
})


module.exports = routes