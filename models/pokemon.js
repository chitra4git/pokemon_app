const mongoose = require('mongoose');

// const pokemon = [
//     {name: "bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur.jpg"},
//     {name: "ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur.jpg"},
//     {name: "venusaur", img: "http://img.pokemondb.net/artwork/venusaur.jpg"},
//     {name: "charmander", img: "http://img.pokemondb.net/artwork/charmander.jpg"},
//     {name: "charizard", img: "http://img.pokemondb.net/artwork/charizard.jpg"},
//     {name: "squirtle", img: "http://img.pokemondb.net/artwork/squirtle.jpg"},
//     {name: "wartortle", img: "http://img.pokemondb.net/artwork/wartortle.jpg"}
//  ];

const pokemonSchema = new mongoose.Schema({
    name: { type: String, require: true},
    image: { type: String, require: true},
})

const Pokemon = mongoose.model('pokemon',pokemonSchema)

module.exports = Pokemon;
 