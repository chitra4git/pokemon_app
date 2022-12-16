require("dotenv").config();
const express = require("express");
const app = express();
// const pokemon = require("./models/pokemon");
const mongoose = require("mongoose");
const Pokemon = require("./models/pokemon");
const methodOverride = require('method-override');
const { findByIdAndRemove } = require("./models/pokemon");

//middleware
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

//CONNECT DATA ==== DEPRECATION WARININGS
mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongodb");
});

//sample data

app.get('/pokemon/seed', (req, res)=>{
    const starterPokemon = [
        {name: "bulbasaur", image: "http://img.pokemondb.net/artwork/bulbasaur"},
        {name: "ivysaur", image: "http://img.pokemondb.net/artwork/ivysaur"},
        {name: "venusaur", image: "http://img.pokemondb.net/artwork/venusaur"},
        {name: "charmander", image: "http://img.pokemondb.net/artwork/charmander"},
        {name: "charizard", image: "http://img.pokemondb.net/artwork/charizard"},
        {name: "squirtle", image: "http://img.pokemondb.net/artwork/squirtle"},
        {name: "wartortle", image: "http://img.pokemondb.net/artwork/wartortle"}
    ];
    Pokemon.deleteMany({}).then((data) => {
        Pokemon.create(starterPokemon).then((data) => {
            //res.json(data);
            res.redirect("/pokemon");
        })
    })
})


//Index
app.get("/pokemon", (req, res) => {
  //find all pokemon
  Pokemon.find({}, (error, allPokemon) => {
    res.render("Index", {
      pokemon: allPokemon,
    });
  });
});

//NEW
app.get("/pokemon/new", (req, res) => {
  res.render("New");
});

//CREATE
app.post("/pokemon", (req, res) => {
  Pokemon.create(req.body, (error, newPokemon) => {
    res.redirect("/pokemon");
  });
});

app.get("/pokemon/new", (req, res) => {
  res.render("New");
});
//Show
app.get("/pokemon/:id", (req, res) => {
  Pokemon.findById(req.params.id, (err, foundPokemon) => {
    res.render("Show", {
      pokemon: foundPokemon,
    });
  });
});

//Edit
app.get('/pokemon/:id/edit',(req, res)=>{
    Pokemon.findById(req.params.id, (err, foundPokemon)=>{
        res.render('Edit', {
            pokemon: foundPokemon
        })
    })
})

//PUT

app.put('/pokemon/:id', (req, res)=>{
    Pokemon.findByIdAndUpdate(req.params.id, req.body,(err, updatedPokemon)=>{
        console.log(updatedPokemon);
        res.redirect(`/pokemon/${req.params.id}`);
    })
})

//Delete route

// need to run $ npm i method-override

app.delete('/pokemon/:id',(req,res)=>{
  Pokemon.findByIdAndRemove(req.params.id,(err, deletedFruit)=>{
    res.redirect('/pokemon')

})
})

app.listen(3000, () => {
  console.log("Server running on 3000");
});