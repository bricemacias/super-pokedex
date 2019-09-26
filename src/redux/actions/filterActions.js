import { CHANGE_HEIGHT_FILTER, CHANGE_WEAKNESSES_FILTER } from '../types';

export const setHeightFilter = heightValues => ({
  type: CHANGE_HEIGHT_FIELD,
  payload: heightValues
});
