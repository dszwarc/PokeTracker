const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema(
        {
            name: 'string',
            nickname: 'string',
            level: 'string',
            sprite: 'string',
        }
    );

const teamSchema = new mongoose.Schema(
    {
        name: 'string',
        description: 'string',
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        pokemon: [pokemonSchema]
    }
);

module.exports = mongoose.model('Team', teamSchema);