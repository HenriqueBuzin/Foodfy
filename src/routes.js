const express = require('express')
const routes = express.Router()
const foodfy = require("./app/controllers/foodfy")
const receitas = require("./app/controllers/receitas")
const sobre = require("./app/controllers/sobre")
const recipes = require("./app/controllers/recipes")
const chefs = require("./app/controllers/chefs")

routes.get('/', function(req, res) {
    return res.redirect("foodfy")
})

routes.get('/foodfy', foodfy.index)

routes.get('/sobre', sobre.index)

routes.get('/receitas', receitas.index)

/* Recipes */
routes.get("/admin/recipes", recipes.index); // Mostrar a lista de receitas
routes.get("/admin/recipes/create", recipes.create); // Mostrar formulário de nova receita
routes.get("/admin/recipes/:id", recipes.show); // Exibir detalhes de uma receita
routes.get("/admin/recipes/:id/edit", recipes.edit); // Mostrar formulário de edição de receita

routes.post("/admin/recipes", recipes.post); // Cadastrar nova receita
routes.put("/admin/recipes", recipes.put); // Editar uma receita
routes.delete("/admin/recipes", recipes.delete); // Deletar uma receita

/* Chefs*/
routes.get("/admin/chefs", chefs.index); // Mostrar a lista de chefs
routes.get("/admin/chefs/create", chefs.create); // Mostrar formulário de novo chef
routes.get("/admin/chefs/:id", chefs.show); // Exibir detalhes de um chef
routes.get("/admin/chefs/:id/edit", chefs.edit); // Mostrar formulário de edição do chef

routes.post("/admin/chefs", chefs.post); // Cadastrar um novo chef
routes.put("/admin/chefs", chefs.put); // Editar um chef
routes.delete("/admin/chefs", chefs.delete); // Deletar um chef

routes.get('/chefs', chefs.home)

module.exports = routes