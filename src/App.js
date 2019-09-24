import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import { pokemons } from './pokemons-example';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: pokemons,
      searchfield: ''
    };
  }

  onSearchTyping = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredPokemons = this.state.pokemons.filter(pokemon => {
      return pokemon.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="App">
        <h1>Super Pokedex</h1>
        <SearchBox searchChange={this.onSearchTyping} />
        <CardList className="CardList" pokemons={filteredPokemons} />
      </div>
    );
  }
}

export default App;
