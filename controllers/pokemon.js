const Team = require('../models/team');

async function create(req, res){
    try{
        const pokemon = Team.pokemon.create({
            name: req.body.name,
            nickname: req.body.nickname,
            level: req.body.level,
            sprite: req.body.sprite
        })
    } catch(err){
        console.log(err)
    }
}

async function deleteOne(req,res){
    try{
        Team.pokemon.findByIdAndRemove({id: req.params.pokeId})
    } catch(err){
        console.log(err)
    }
}

module.exports ={
    create,
    deleteOne
}