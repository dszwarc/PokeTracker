const Team = require('../models/team');

async function create(req, res){
    console.log('made it to create controller function')
    console.log(req.body, ' <---- req.body in create')
    try{
        const team = await Team.create({
            name: req.body.name,
            description: req.body.description,
            user: req.user
            }
        )
    }catch(err){
        res.status(400).json({error: err})
    }
}

async function index(req, res){
    try{
        console.log('made it to index function')
        console.log(req.user)
        const teams = await Team.find({user_id: req.user._id});
        console.log(teams, ' <---- all teams found by index');
        res.status(200).json({teams: teams});
    } catch(err){
        return res.status(401).json(err);
    }
  }


  module.exports = {
    index,
    create
}