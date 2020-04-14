const express = require('express')
const routes = express.Router()
const home = require("./app/controllers/home")
const receitas = require("./app/controllers/receitas")
const sobre = require("./app/controllers/sobre")
const recipes = require("./app/controllers/recipes")
const chefs = require("./app/controllers/chefs")

routes.get('/', function(req, res) {
    return res.redirect("foodfy")
})

routes.get('/foodfy', home.index)

routes.get('/sobre', sobre.index)

routes.get('/receitas', receitas.index)

routes.get("/admin/recipes", recipes.index); // Mostrar a lista de receitas
routes.get("/admin/recipes/create", recipes.create); // Mostrar formulário de nova receita
routes.get("/admin/recipes/:id", recipes.show); // Exibir detalhes de uma receita
routes.get("/admin/recipes/:id/edit", recipes.edit); // Mostrar formulário de edição de receita

routes.post("/admin/recipes", recipes.post); // Cadastrar nova receita
routes.put("/admin/recipes", recipes.put); // Editar uma receita
routes.delete("/admin/recipes", recipes.delete); // Deletar uma receita

routes.get('/chefs', chefs.index)

module.exports = routes