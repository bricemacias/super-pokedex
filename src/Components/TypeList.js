import React from 'react';
import CheckboxButton from './Inputs/CheckboxButton';
import { pokemonTypes } from '../files/pokemon-types';

const TypeList = ({ typeValues, typelistChange }) => {
  return (
    <div className="TypeList">
      {pokemonTypes.map(type => {
        return (
          <div className="pa3" key={type.id}>
            <CheckboxButton
              key={type.id}
              buttonName={`${type.value
                .split('')[0]
                .toUpperCase()}${type.value.substring(1)}`}
              buttonValue={type.value}
              checkedValue={typeValues[type.value] === 1}
              optionChange={typelistChange}
            />
          </div>
        );
      })}
    </div>
  );
};

export default TypeList;
