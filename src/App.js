import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';

import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import HeightSlider from './components/HeightSlider';
import RadioButton from './components/Inputs/RadioButton';
import TypeList from './components/TypeList';

import { setSearchField, returnFilter } from './redux/actions/searchAction';
import { requestPokemons } from './redux/actions/fetchingPokemonsAction';

function App({
  searchField,
  onSearchTyping,
  onFilter,
  pokemons,
  isPending,
  error,
  onRequestPokemons
}) {
  //const [pokemons, setPokemons] = useState(pokemonsExample);
  //const [searchfield, setSearchfield] = useState('');
  const [optionvalue, setOptionvalue] = useState('name');
  const [checkboxvalues, setCheckboxvalues] = useState({
    normal: 0,
    fire: 0,
    water: 0,
    grass: 0,
    electric: 0,
    ice: 0,
    fighting: 0,
    poison: 0,
    ground: 0,
    flying: 0,
    psychic: 0,
    bug: 0,
    rock: 0,
    ghost: 0,
    dragon: 0,
    dark: 0,
    steel: 0,
    fairy: 0
  });
  const [count, setCount] = useState(0);
  const [slidervalues, setSlidervalues] = useState({ min: 0, max: 7 });

  useEffect(() => {
    onRequestPokemons();
  }, [onRequestPokemons]);

  const onSliderChange = value => {
    console.log(value);
    setSlidervalues({ min: value[0], max: value[1] });
  };

  const handleOptionChange = changeEvent => {
    setOptionvalue(changeEvent.target.value);
  };

  const handleWeaknessChange = changeEvent => {
    console.log(checkboxvalues);
    let type = changeEvent.target.value;
    let counter = count;
    if (checkboxvalues[type] === 1) {
      setCheckboxvalues({ ...checkboxvalues, [type]: 0 });
      setCount(--counter);
    } else if (checkboxvalues[type] === 0) {
      setCheckboxvalues({ ...checkboxvalues, [type]: 1 });
      setCount(++counter);
    }
  };

  const filteredHeightPokemons = pokemons.filter(pokemon => {
    return (
      parseFloat(pokemon.height.split(' ')[0]) >= slidervalues.min &&
      parseFloat(pokemon.height.split(' ')[0]) <= slidervalues.max
    );
  });

  const filteredWeaknessPokemons = filteredHeightPokemons.filter(pokemon => {
    if (count === 0) {
      return true;
    } else {
      let weaknesses = pokemon.weaknesses.map(el => el.toLowerCase());
      for (let i of weaknesses) {
        if (checkboxvalues[i] === 1) {
          return true;
        }
      }
    }
  });

  const filteredPokemons =
    //onFilter(pokemons, optionvalue, searchField);
    filteredWeaknessPokemons.filter(pokemon => {
      if (optionvalue === 'name') {
        return pokemon.name.toLowerCase().includes(searchField.toLowerCase());
      } else if (optionvalue === 'type') {
        return pokemon.type
          .map(el => el.toLowerCase())
          .includes(searchField.toLowerCase());
      } else {
        return false;
      }
    });

  useEffect(() => {
    onFilter(filteredPokemons);
  }, [searchField, slidervalues, checkboxvalues]);

  return isPending ? (
    <h1 className="tc mt5">Loading</h1>
  ) : (
    <div className="App">
      <h1 style={{ fontSize: 70 }}>Super Pokedex</h1>
      <div className="container">
        <SearchBox searchChange={onSearchTyping} />
        <form className="form-container">
          <RadioButton
            buttonName="Name"
            buttonValue="name"
            checkedValue={optionvalue === 'name'}
            optionChange={handleOptionChange}
          />
          <RadioButton
            buttonName="Type"
            buttonValue="type"
            checkedValue={optionvalue === 'type'}
            optionChange={handleOptionChange}
          />
        </form>
      </div>
      <h2>Filter By Height</h2>
      <HeightSlider values={slidervalues} sliderChange={onSliderChange} />
      <h2>Filter By Weaknesses</h2>
      <TypeList
        typeValues={checkboxvalues}
        typelistChange={handleWeaknessChange}
      />
      <CardList className="CardList" pokemons={filteredPokemons} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    searchField: state.searchPokemons.searchField,
    table: state.searchPokemons.table,
    pokemons: state.requestPokemons.pokemons,
    isPending: state.requestPokemons.isPending,
    error: state.requestPokemons.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchTyping: event => dispatch(setSearchField(event.target.value)),
    // onFilter1: (pokemonList, anOption, aSearchList) =>
    //   dispatch(filterPokemons(pokemonList, anOption, aSearchList)),
    onFilter: pokemonList => dispatch(returnFilter(pokemonList)),
    onRequestPokemons: () => dispatch(requestPokemons())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
