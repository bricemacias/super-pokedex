import { CHANGE_HEIGHT_FILTER, CHANGE_WEAKNESSES_FILTER } from '../types';

export const setHeightFilter = heightValues => ({
  type: CHANGE_HEIGHT_FILTER,
  payload: heightValues
});

// export const setWeaknessFilter = (
//   weaknessFilterValues,
//   weaknessesFilterEvent,
//   count
// ) => dispatch => {
//   let type = weaknessesFilterEvent.target.value;
//   let counter = count;
//   if (weaknessFilterValues[type] === 1) {
//     dispatch({
//       type: CHANGE_WEAKNESSES_FILTER,
//       payload: [{ ...weaknessFilterValues, [type]: 0 }, --counter]
//     });
//   } else if (weaknessFilterValues[type] === 0) {
//     dispatch({
//       type: CHANGE_WEAKNESSES_FILTER,
//       payload: [{ ...weaknessFilterValues, [type]: 1 }, ++counter]
//     });
//   }
// };

export const setWeaknessFilter = weaknessesFilterEvent => ({
  type: CHANGE_WEAKNESSES_FILTER,
  payload: weaknessesFilterEvent.target.value
});
