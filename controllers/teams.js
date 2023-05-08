const Team = require('../models/team');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = {
    index,
    create
}

async function create(data){
    try{
        const team = await Team.create({
            name: req.body.name,
            description: req.body.description
            }
        )
    }catch(err){
        res.status(400).json({error: err})
    }
}

async function index(req, res){
    try{
      const teams = await Team.find({user: req.user});
      console.log(teams);
      res.status(200).json({teams: teams});
    } catch(err){
      return res.status(401).json(err);
    }
  }