import React from 'react';
import './App.css';
import CardList from './components/CardList';
import { pokemons } from './pokemons-example';

function App() {
  return (
    <div className="App">
      <h1>Super Pokedex</h1>
      <div className="CardList">
        <CardList pokemons={pokemons} />
      </div>
    </div>
  );
}

export default App;
