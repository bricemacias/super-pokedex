import React from 'react';
import './App.css';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import { pokemons } from './pokemons-example';

function App() {
  return (
    <div className="App">
      <h1>Super Pokedex</h1>
      <SearchBox />
      <CardList className="CardList" pokemons={pokemons} />
    </div>
  );
}

export default App;
