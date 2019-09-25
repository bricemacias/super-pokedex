import React, { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import HeightSlider from './components/HeightSlider';
import RadioButton from './components/Inputs/RadioButton';
import axios from 'axios';
import { pokemonsExample } from './files/pokemons-example';

function App() {
  const [pokemons, setPokemons] = useState(pokemonsExample);
  const [searchfield, setSearchfield] = useState('');
  const [checkboxvalue, setCheckboxvalue] = useState('name');
  const [slidervalues, setSlidervalues] = useState({ min: 0, max: 7 });

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
    setSearchfield(event.target.value);
  };

  const onSliderChange = value => {
    console.log(value);
    setSlidervalues({ min: value[0], max: value[1] });
  };

  const handleOptionChange = changeEvent => {
    setCheckboxvalue(changeEvent.target.value);
  };

  const filteredHeightPokemons = pokemons.filter(pokemon => {
    return (
      parseFloat(pokemon.height.split(' ')[0]) >= slidervalues.min &&
      parseFloat(pokemon.height.split(' ')[0]) <= slidervalues.max
    );
  });

  const filteredPokemons = filteredHeightPokemons.filter(pokemon => {
    if (checkboxvalue === 'name') {
      return pokemon.name.toLowerCase().includes(searchfield.toLowerCase());
    } else if (checkboxvalue === 'type') {
      return pokemon.type
        .map(el => el.toLowerCase())
        .includes(searchfield.toLowerCase());
    } else {
      return false;
    }
  });

  return (
    <div className="App">
      <h1>Super Pokedex</h1>
      <div className="container">
        <SearchBox searchChange={onSearchTyping} />
        <form className="form-container">
          <RadioButton
            buttonName="Name"
            buttonValue="name"
            checkedValue={checkboxvalue === 'name'}
            optionChange={handleOptionChange}
          />
          <RadioButton
            buttonName="Type"
            buttonValue="type"
            checkedValue={checkboxvalue === 'type'}
            optionChange={handleOptionChange}
          />
        </form>
      </div>
      <h2>Filter By Height</h2>
      <HeightSlider values={slidervalues} sliderChange={onSliderChange} />
      <CardList className="CardList" pokemons={filteredPokemons} />
    </div>
  );
}

export default App;
