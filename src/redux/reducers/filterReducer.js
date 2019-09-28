import { CHANGE_HEIGHT_FILTER, CHANGE_WEAKNESSES_FILTER } from '../types';

const initialState = {
  heightFilterValues: { min: 0, max: 7 },
  weaknessesFilterValues: {
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
  },
  weaknessesCounter: 0
};

export const filterPokemons = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_HEIGHT_FILTER:
      return {
        ...state,
        heightFilterValues: { min: action.payload[0], max: action.payload[1] }
      };
    case CHANGE_WEAKNESSES_FILTER:
      let counter = state.weaknessesCounter;
      console.log(state.weaknessesFilterValues[action.payload]);
      if (state.weaknessesFilterValues[action.payload] === 1) {
        return {
          ...state,
          weaknessesFilterValues: {
            ...state.weaknessesFilterValues,
            [action.payload]: 0
          },
          weaknessesCounter: --counter
        };
      } else if (state.weaknessesFilterValues[action.payload] === 0) {
        return {
          ...state,
          weaknessesFilterValues: {
            ...state.weaknessesFilterValues,
            [action.payload]: 1
          },
          weaknessesCounter: ++counter
        };
      }
      return {
        ...state,
        weaknessesFilterValues: action.payload[0],
        weaknessesCounter: action.payload[1]
      };
    default:
      return state;
  }
};
