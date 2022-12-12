const React = require ('react');

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
  };


class Index extends React.Component {
  render() {
      return (
        <div>
          <h1 style={myStyle}>See All The Pokemon!</h1>
         
          <ul>
          {this.props.pokemons.map((pokemon, i) => {
              return (
                <li key = {i}>
                   <a href={`/pokemon/${i}`}> {pokemon.name} </a>
                
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  }
  
  module.exports = Index;
  