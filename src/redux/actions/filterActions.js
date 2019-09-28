import { CHANGE_HEIGHT_FILTER, CHANGE_WEAKNESSES_FILTER } from '../types';

export const setHeightFilter = heightValues => ({
  type: CHANGE_HEIGHT_FILTER,
  payload: heightValues
});

export const setWeaknessFilter = weaknessesFilterEvent => ({
  type: CHANGE_WEAKNESSES_FILTER,
  payload: weaknessesFilterEvent.target.value
});
