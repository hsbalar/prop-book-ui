import {
  SET_FILTER_TYPE,
  CHANGE_FILTER_TEXT,
  SET_COLUMNS,
  CHANGE_ADVANCE_FILTER,
  RESET_ADVANCE_FILTER,
  SET_ADVANCE_FILTER_RESULT,
  SHOW_LOADER,
  HIDE_LOADER,
} from './types';
import { postData } from '../services/api.service';

const API_FILTER_PROPERTY = '/advance-filter';

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
  type: CHANGE_ADVANCE_FILTER,
  fields,
});

export const handleResetAdvanceFilter = () => ({ type: RESET_ADVANCE_FILTER });

export const applyAdvanceFilter = () => (dispatch, getState) => {
  dispatch(getFilterPropertyDetails());
};

export const setFilterResultData = (res) => ({
  type: SET_ADVANCE_FILTER_RESULT,
  res,
});

export const getFilterPropertyDetails = () => (dispatch, getState) => {
  const { advanceFilters } = getState().filters;
  dispatch({ type: SHOW_LOADER });
  postData(API_FILTER_PROPERTY, { ...advanceFilters }).then(
    (res) => {
      const { docs } = res.data;
      dispatch(setFilterResultData(docs || []));
      dispatch({ type: HIDE_LOADER });
    },
    (err) => {
      dispatch({ type: HIDE_LOADER });
    }
  );
};
