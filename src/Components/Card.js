import React from 'react';

const Card = ({ id, image, name, type, weaknesses, height }) => {
  const colors = {
    normal: '#A8A878',
    fire: '#F08030',
    water: '#6890F0',
    grass: '#78C850',
    electric: '#F8D030',
    ice: '#98D8D8',
    fighting: '#C03028',
    poison: '#A040A0',
    ground: '#E0C068',
    flying: '#A890F0',
    psychic: '#F85888',
    bug: '#A8B820',
    rock: '#B8A038',
    ghost: '#705898',
    dragon: '#7038F8',
    dark: '#705848',
    steel: '#B8B8D0',
    fairy: '#EE99AC'
  };

  return (
    <div
      className="tc dib br3 pa3 ma2 grow bw2 shadow-5"
      style={
        type.length > 1
          ? {
              background: `linear-gradient(to right, ${
                colors[type[0].toLowerCase()]
              } 50%, ${colors[type[1].toLowerCase()]} 50%)`
            }
          : {
              backgroundColor: colors[type[0].toLowerCase()]
            }
      }
    >
      <img src={image} alt={name} />
      <div>
        <h2 className="white">{name}</h2>
        <p className="white">
          Type: {type.length > 1 ? `${type[0]} ${type[1]}` : type[0]}
        </p>
        <p className="white">
          Weaknesses:{' '}
          {weaknesses.length > 1
            ? weaknesses.map(element => `${element} `)
            : weaknesses[0]}
        </p>
        <p className="white">Height: {height}</p>
      </div>
    </div>
  );
};

export default Card;
