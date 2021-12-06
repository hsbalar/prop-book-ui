import {
  SET_FILTER_TYPE,
  CHANGE_FILTER_TEXT,
  SET_COLUMNS,
  ADVANCE_FILTER_CHANGE,
} from './types';

export const handleFilterTypeChange = (listType) => ({
  type: SET_FILTER_TYPE,
  listType,
});

export const handleFilterChange = (inputSearch) => ({
  type: CHANGE_FILTER_TEXT,
  inputSearch,
});

export const filterColumnsChange = (fields) => {
  localStorage.setItem('columns', JSON.stringify(fields));
  return { type: SET_COLUMNS, fields };
};

export const handleAdvanceFilterChange = (fields) => ({
  type: ADVANCE_FILTER_CHANGE,
  fields,
});
