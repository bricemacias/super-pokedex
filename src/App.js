import React from 'react';
import './App.css';
import Card from './components/Card';
import { pokemons } from './pokemons-example';

function App() {
  return (
    <div className="App">
      <Card
        id={pokemons[0].id}
        image={pokemons[0].img}
        name={pokemons[0].name}
        type={pokemons[0].type}
        weaknesses={pokemons[0].weaknesses}
        height={pokemons[0].height}
      />
      <Card
        id={pokemons[1].id}
        image={pokemons[1].img}
        name={pokemons[1].name}
        type={pokemons[1].type}
        weaknesses={pokemons[1].weaknesses}
        height={pokemons[1].height}
      />
      <Card
        id={pokemons[2].id}
        image={pokemons[2].img}
        name={pokemons[2].name}
        type={pokemons[2].type}
        weaknesses={pokemons[2].weaknesses}
        height={pokemons[2].height}
      />
    </div>
  );
}

export default App;
