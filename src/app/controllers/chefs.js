const { age, date } = require('../../lib/utils')
const Chef = require('../models/Chefs')

module.exports = {
    home(req, res){
        return res.render("chefs/index")
    },
    index(req, res){
        Chef.all(function(chefs){
            return res.render("admin/chefs/index", { chefs })

            console.log(chefs)
        })
    },
    create(req, res){
        return res.render("admin/chefs/create")
    },
    show(req, res){
        /*
            routes.get("/admin/chefs", chefs.index); // Mostrar a lista de chefs
            routes.get("/admin/chefs/create", chefs.create); // Mostrar formulário de novo chef
            routes.get("/admin/chefs/:id", chefs.show); // Exibir detalhes de um chef
            routes.get("/admin/chefs/:id/edit", chefs.edit); // Mostrar formulário de edição do chef

            routes.post("/admin/chefs", chefs.post); // Cadastrar um novo chef
            routes.put("/admin/chefs", chefs.put); // Editar um chef
            routes.delete("/admin/chefs", chefs.delete); // Deletar um chef

        */

       Chef.find(req.params.id, function(chef){
            
        if(!chef) return res.send("Chef not found!")
        
        return res.render("admin/chefs/show", { Chef })
    
    })





        return res.render("admin/chefs/index")
    },
    edit(req, res){
        Chef.find(req.params.id, function(chef){
            
            if(!chef) return res.send("Chef not found!")
            
            return res.render("admin/chefs/edit", { chef })
        
        })
    },
    post(req, res){
        const keys = Object.keys(req.body)

        for(key of keys){
            if(req.body[key] == ""){
                return res.send("Please, fill all fields!")
            }
        }
    
        Chef.create(req.body, function(chefs){
            return res.redirect(`/admin/chefs/${chefs.id}`)
        })
    },
    put(req, res){
        const keys = Object.keys(req.body)

        for(key of keys){
            if(req.body[key] == ""){
                return res.send("Please, fill all fields!")
            }
        }

        Member.update(req.body, function(){
            return res.redirect(`admin/chefs/${req.body.id}`)
        })
    },
    delete(req, res){
        Member.delete(req.body.id, function(){
            return res.redirect("admin/chefs/index")
        })
    }
}