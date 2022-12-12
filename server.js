const express = require ('express');
const app = express();
const pokemon = require('./models/pokemon')

//setup Show.jsx file
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


app.get('/',(req,res) => {
    res.send('Welcome to the Pokemon App!');
})


//GET Route pokemon

app.get('/pokemon', (req, res) => {
    res.render("Index",{pokemons:pokemon})
});



app.listen(3000, () => {
    console.log('listening')
})