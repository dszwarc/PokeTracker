const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema(
        {
            name: 'string',
            nickname: 'string',
            ability: 'string',
            moves: ['string'],
            sprite: 'string',
            isShiny: Boolean,
            types: ['string']
        }
    );

const teamSchema = new mongoose.Schema(
    {
        name: 'string',
        description: 'string',
        pokemon: [pokemonSchema]
    }
);

module.exports = mongoose.model('Team', teamSchema);