import React from 'react';

const Card = ({ id, image, name, type, weaknesses, height }) => {
  return (
    <div className="tc bg-near-white dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={image} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>Type: {type.length > 1 ? `${type[0]} ${type[1]}` : type[0]}</p>
        <p>
          Weaknesses:{' '}
          {weaknesses.length > 1
            ? weaknesses.map(element => `${element} `)
            : weaknesses[0]}
        </p>
        <p>Height: {height}</p>
      </div>
    </div>
  );
};

export default Card;
