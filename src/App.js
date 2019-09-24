import React, { useState } from 'react';
import './App.css';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import { pokemonsExample } from './pokemons-example';

function App() {
  const [pokemons] = useState(pokemonsExample);
  const [searchfield, setSearchField] = useState('');

  const onSearchTyping = event => {
    setSearchField(event.target.value);
  };

  const filteredPokemons = pokemons.filter(pokemon => {
    return pokemon.name.toLowerCase().includes(searchfield.toLowerCase());
  });
  return (
    <div className="App">
      <h1>Super Pokedex</h1>
      <SearchBox searchChange={onSearchTyping} />
      <CardList className="CardList" pokemons={filteredPokemons} />
    </div>
  );
}

export default App;
