import { SET_FILTER_TYPE, CHANGE_FILTER_TEXT } from './types';

export const handleFilterTypeChange = (listType) => ({
  type: SET_FILTER_TYPE,
  listType,
});

export const handleFilterChange = (inputSearch) => ({
  type: CHANGE_FILTER_TEXT,
  inputSearch,
});
