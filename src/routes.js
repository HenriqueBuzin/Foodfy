const express = require('express')
const routes = express.Router()

routes.get('/', function(req, res) {
    return res.redirect("home")
})

routes.get('/home', function(req, res) {
    return res.render("home/index")
})


module.exports = routes