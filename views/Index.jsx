import React, { Component } from "react";


export default class Index extends Component {
  render() {
    
    const pokemon = this.props.pokemon;

    console.log(pokemon);

    return (
      <html>
        <body>
          <nav>
            <a href='/pokemon/new'> Create a New Pokemon</a>
          </nav>
          <h1>Pokedex</h1>
          {pokemon.map((p) => {
            return(
              <li>
              <a href={`/pokemon/${p.id}`}>
                {p.name} <br/>
              </a>
              <br />
              <form action={`/pokemon/${p.id}?_method=DELETE`} method="POST">
                <input type='submit' value='DELETE'/>
              </form>
              <br/>
              <nav>
              <a href={`/pokemon/${p.id}/edit`}>Edit this Pokemon</a>
              </nav>
              <br/>
              </li>
            );
          })}
          <a href=''></a>
        </body>
      </html>
    );
  }
}
  
module.exports = Index;

