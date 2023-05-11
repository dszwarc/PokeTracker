const Team = require('../models/team');

async function create(req, res){
    try{
        const team = await Team.create({
            name: req.body.name,
            description: req.body.description,
            user: req.user
            }
        )
        res.status(201).json({data: 'create successful'})
    }catch(err){
        res.status(400).json({error: err})
    }
}

async function deleteTeam(req,res){
    try{
        console.log(req.params.id)
        const team = await Team.findByIdAndDelete(req.params.id)
        res.status(200).json({data: 'delete successful'})
    }catch(err){
        res.status(400).json({error: err})
    }
}

async function index(req, res){
    try{
        const teams = await Team.find({user_id: req.user._id});
        res.status(200).json({teams: teams});
    } catch(err){
        return res.status(401).json(err);
    }
  }

async function findOne(req, res){
    try{
        const teams = await Team.find({id: req.body.teamId});
        res.status(200).json({teams: teams});
    } catch(err){
        return res.status(401).json(err);
    }
}

  module.exports = {
    index,
    create,
    deleteTeam,
    findOne
}