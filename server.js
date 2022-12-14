require('dotenv').config();
const express = require ('express');
const pokemon = require('./models/pokemon.js');
const app = express();
const Pokemon = require('./models/pokemon.js')
const mongoose = require('mongoose');

//setup Show.jsx file
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


// app.get('/',(req,res) => {
//     res.send('Welcome to the Pokemon App!');
// })

//Connection to database

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.once('open', () => {
    console.log("connected to mongo");
  });


// ====Routes====
// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show

//Index Route 

app.get('/pokemon', (req, res) => {
    res.render("Index",{pokemons:Pokemon})
    
});

//New Route

app.get ('/pokemon/new', (req, res) => {
    res.render('New');
})

//Craete Route
app.post("/pokemon", (req, res) =>{
    pokemon.create(req.body, (error, createdPokemon) =>{
        res.redirect('/pokemon')
    })
})

//Show Route

app.get('/pokemon/:id',(req,res) => {

    res.render("Show",{pokemons:Pokemon[req.params.id]})

});



app.listen(3000, () => {
    console.log('listening')
})