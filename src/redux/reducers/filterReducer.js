import { CHANGE_HEIGHT_FILTER, CHANGE_WEAKNESSES_FILTER } from '../types';

const initialState = {
  heightFilterValues: { min: 0, max: 7 }
};

export const filterPokemons = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_HEIGHT_FILTER:
      return {
        ...state,
        heightFilterValues: { min: action.payload[0], max: action.payload[1] }
      };
    default:
      return state;
  }
};
