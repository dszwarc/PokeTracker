const Team = require('../models/team');

async function create(req, res){
    console.log(req.body, '<--- req.body in create poke function')
    try{
        const team = await Team.findById(req.body.teamId)
        console.log(team);
        team.pokemon.push({
            name: req.body.name,
            nickname: req.body.nickname,
            level: req.body.level,
            sprite: req.body.sprite
        })
        await team.save();
        res.status(201).json({data: `Added ${req.body.nickname} to ${team.name}`});
    } catch(err){
        console.log(err)
    }
}

async function deletePoke(req,res){
    try{
        Team.pokemon.findByIdAndRemove({id: req.params.pokeId})
    } catch(err){
        console.log(err)
    }
}

module.exports ={
    create,
    deletePoke
}