import { SET_FILTER_TYPE, CHANGE_FILTER_TEXT, SET_COLUMNS } from './types';

export const handleFilterTypeChange = (listType) => ({
  type: SET_FILTER_TYPE,
  listType,
});

export const handleFilterChange = (inputSearch) => ({
  type: CHANGE_FILTER_TEXT,
  inputSearch,
});

export const filterColumnsChange = (field) => (dispatch, getState) => {
  console.log(getState());
  // dispatch({ type: SET_COLUMNS, fields });
};
