import React, { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import axios from 'axios';
import { pokemonsExample } from './pokemons-example';
import lowerCase from 'lower-case';

function App() {
  const [pokemons, setPokemons] = useState(pokemonsExample);
  const [searchfield, setSearchField] = useState('');
  const [checkboxvalue, setCheckboxvalue] = useState('name');

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
  }, []);

  const onSearchTyping = event => {
    setSearchField(event.target.value);
  };

  const handleOptionChange = changeEvent => {
    setCheckboxvalue(changeEvent.target.value);
  };

  const filteredPokemons = pokemons.filter(pokemon => {
    if (checkboxvalue === 'name') {
      return pokemon.name.toLowerCase().includes(searchfield.toLowerCase());
    } else if (checkboxvalue === 'type') {
      return pokemon.type
        .map(el => el.toLowerCase())
        .includes(searchfield.toLowerCase());
    }
    // return pokemon.type.some(element => {
    //   element.toLowerCase().includes(searchfield.toLowerCase());
    // });
  });
  // for (let type of pokemon.type) {
  //   return type.toLowerCase().includes(searchfield.toLowerCase());
  // }
  return (
    <div className="App">
      <h1>Super Pokedex</h1>
      <SearchBox searchChange={onSearchTyping} />
      <form>
        <div className="form-check">
          <label>
            <input
              type="radio"
              name="search-type"
              value="name"
              checked={checkboxvalue === 'name'}
              onChange={handleOptionChange}
              className="form-check-input"
            />
            {` Name`}
          </label>
        </div>
        <div className="form-check">
          <label>
            <input
              type="radio"
              name="search-type"
              value="type"
              checked={checkboxvalue === 'type'}
              onChange={handleOptionChange}
              className="form-check-input"
            />
            {` Type`}
          </label>
        </div>
      </form>
      <CardList className="CardList" pokemons={filteredPokemons} />
    </div>
  );
}

export default App;
