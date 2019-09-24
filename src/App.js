import React, { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import axios from 'axios';
import { pokemonsExample } from './pokemons-example';

function App() {
  const [pokemons, setPokemons] = useState(pokemonsExample);
  const [searchfield, setSearchField] = useState('');
  //const [checkboxvalue, setCheckboxvalue] = useState('name');

  useEffect(() => {
    axios
      .get(
        'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json'
      )
      .then(response => {
        const fetchedPokemons = response.data.pokemon;
        console.log(fetchedPokemons);
        setPokemons(fetchedPokemons);
      });
  });

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
