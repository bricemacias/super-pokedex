import React from 'react';
import Card from './Card';

const Cardlist = ({ pokemons }) => {
  return (
    <div>
      {pokemons.map(pokemon => {
        return (
          <Card
            key={pokemon.id}
            id={pokemon.id}
            image={pokemon.img}
            name={pokemon.name}
            type={pokemon.type}
            weaknesses={pokemon.weaknesses}
            height={pokemon.height}
          />
        );
      })}
    </div>
  );
};

export default Cardlist;
