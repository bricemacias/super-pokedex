import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';

import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import HeightSlider from './components/HeightSlider';
import RadioButton from './components/Inputs/RadioButton';
import TypeList from './components/TypeList';

import {
  setSearchField,
  setTypeField,
  setTypeAutocomplete,
  returnFilter
} from './redux/actions/searchActions';
import { requestPokemons } from './redux/actions/fetchingPokemonsActions';
import {
  setHeightFilter,
  setWeaknessFilter
} from './redux/actions/filterActions';

function App({
  searchField,
  onSearchTyping,
  onTypeTyping,
  onTypeAutocomplete,
  onFilter,
  pokemons,
  isPending,
  error,
  onRequestPokemons,
  onHeightFilter,
  heightFilterValues,
  onWeaknessesFilter,
  weaknessesFilterValues,
  weaknessesCounter
}) {
  const [optionvalue, setOptionvalue] = useState('name');

  useEffect(() => {
    onRequestPokemons();
  }, [onRequestPokemons]);

  const handleOptionChange = changeEvent => {
    setOptionvalue(changeEvent.target.value);
  };

  const filteredHeightPokemons = pokemons.filter(pokemon => {
    return (
      parseFloat(pokemon.height.split(' ')[0]) >= heightFilterValues.min &&
      parseFloat(pokemon.height.split(' ')[0]) <= heightFilterValues.max
    );
  });

  const filteredWeaknessPokemons = filteredHeightPokemons.filter(pokemon => {
    if (weaknessesCounter === 0) {
      return true;
    } else {
      let weaknesses = pokemon.weaknesses.map(el => el.toLowerCase());
      for (let i of weaknesses) {
        if (weaknessesFilterValues[i] === 1) {
          return true;
        }
      }
    }
  });

  const filteredPokemons = filteredWeaknessPokemons.filter(pokemon => {
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
  }, [searchField, heightFilterValues, weaknessesFilterValues]);

  return isPending ? (
    <h1 className="tc mt5">Loading</h1>
  ) : (
    <div className="App">
      <h1 style={{ fontSize: 70 }}>Super Pokedex</h1>
      <div className="container">
        <SearchBox
          searchChange={onSearchTyping}
          typeChange={onTypeTyping}
          autocompleteChange={onTypeAutocomplete}
          searchType={optionvalue}
        />
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
      <HeightSlider values={heightFilterValues} sliderChange={onHeightFilter} />
      <h2>Filter By Weaknesses</h2>
      <TypeList
        typeValues={weaknessesFilterValues}
        typelistChange={onWeaknessesFilter}
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
    error: state.requestPokemons.error,
    heightFilterValues: state.filterPokemons.heightFilterValues,
    weaknessesFilterValues: state.filterPokemons.weaknessesFilterValues,
    weaknessesCounter: state.filterPokemons.weaknessesCounter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchTyping: event => dispatch(setSearchField(event.target.value)),
    onTypeTyping: event => dispatch(setSearchField(event)),
    onTypeAutocomplete: array => dispatch(setTypeAutocomplete(array)),
    onFilter: pokemonList => dispatch(returnFilter(pokemonList)),
    onRequestPokemons: () => dispatch(requestPokemons()),
    onHeightFilter: values => dispatch(setHeightFilter(values)),
    onWeaknessesFilter: (values, event, aCounter) =>
      dispatch(setWeaknessFilter(values, event, aCounter))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
