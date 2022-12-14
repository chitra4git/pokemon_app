const React = require ('react');

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
  };


class Index extends React.Component {
  render() {

  console.log(this.props.pokemon)
      return (
        <div>
        <nav>
          <a href="/pokemon/new"> Create a New pokemon</a>
        </nav>

          <h1 style={myStyle}>See All The Pokemon!</h1>
         
          <ul>
          {this.props.pokemons.map((pokemon, i) => {
              return (
                <li key = {i}>
                  The <a href={`/pokemon/${i}`}> {pokemon.name} </a> is{" "}
                  {pokemon.img}
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  }

//   import React, { Component } from 'react'
  
//   export default class  extends Component {
//     render() {
//         console.log(this.prop.pokemon)
//         const pokemon = this.prop.pokemon
//       return (
//         <div>
//             <h1>All Pokemon</h1>
//         {
//             pokemon.map((p,id)=>{
//                 return(
//                     <a herf = {`/pokemon/${id}`}>
//                         <li>{p.name}</li>
//                     </a>
//                 )
//             })
//         }

//         </div>
//       )
//     }
//   }
  
  
  module.exports = Index;
  