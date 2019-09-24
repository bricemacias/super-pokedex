import React from 'react';
import './App.css';
import Cardlist from './components/Cardlist';
import { pokemons } from './pokemons-example';

function App() {
  return (
    <div className="App">
      <Cardlist pokemons={pokemons} />
    </div>
  );
}

export default App;
