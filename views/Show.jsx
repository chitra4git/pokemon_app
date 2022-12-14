import React from 'react'
import pokemon from '../models/pokemon'

function Show({pokemons}) {

    return(
        <div>
        <h1>Gotta Catch 'Em All</h1>
        <h2>{pokemons.name}</h2>
        <img src={`${pokemons.img}.jpg`}/>
        <a href='/pokemon'>Back</a>

        </div>
    )
}

export default Show