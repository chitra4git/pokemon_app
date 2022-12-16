import React, { Component } from 'react'

class Edit extends Component {
  render() {
    const { pokemon } = this.props;
    console.log(pokemon)
    return (
      <div>
        <nav>
            <a href='/pokemon'>Changes my mind</a>
        </nav>
        <h1>Edit Pokemon</h1>
        <form action={`/pokemon/${pokemon._id}?_method=PUT`} method="POST">
            Name: <input type="text" name="name" defaultValue={pokemon.name} />{" "}<br/>
            Image: <input type="text" name="image" defaultValue={pokemon.image}/>{" "}<br/>
            <input type="submit" value="Submit Changes"/>
        </form>
      </div>
    )
  }
}

export default Edit;
