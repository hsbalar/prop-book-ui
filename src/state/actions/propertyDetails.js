import {
  ON_CHANGE_FIELD,
  CHANGE_STATUS,
  GET_PROPERTY_LIST,
  SET_PROPERTY_LIST,
  SHOW_LOADER,
  HIDE_LOADER,
  UPDATE_PROPERTY,
  RESET_DETAILS,
  SET_METRIX_DATA,
  APPLY_FILTER,
} from './types';

import { getData, postData } from '../services/api.service';

const API_SAVE_PROPERTY = '/save-property';
const API_GET_METRIX = '/metrix';
const API_UPDATE_PROPERTY = '/update-property';
const API_DELETE_PROPERTY = '/delete-property';
const API_GET_PROPERTY = '/properties';
const API_FILTER = '/filter';

export const handleFieldChange = (payload) => ({
  type: ON_CHANGE_FIELD,
  payload,
});

export const handleStatusChange = (status) => ({
  type: CHANGE_STATUS,
  status,
});

export const receiveProperty = (list, propertyType) => ({
  type: GET_PROPERTY_LIST,
  propertyType,
  list,
});

export const setPropertyData = (payload) => ({
  type: SET_PROPERTY_LIST,
  payload,
});

export const setMetrixData = (payload) => ({
  type: SET_METRIX_DATA,
  payload,
});

export const resetEditRowData = () => ({
  type: RESET_DETAILS,
});

export const setEditRowData = (payload) => ({
  type: UPDATE_PROPERTY,
  payload,
});

export const saveProperty = () => (dispatch, getState) => {
  const { propertyDetails } = getState().propertyDetails;
  postData(API_SAVE_PROPERTY, propertyDetails).then(
    (res) => {
      dispatch(handleStatusChange('success'));
      dispatch(resetEditRowData());
    },
    (err) => {}
  );
};

export const updateProperty = () => (dispatch, getState) => {
  const { propertyDetails } = getState().propertyDetails;
  postData(API_UPDATE_PROPERTY, propertyDetails).then(
    (res) => {
      dispatch(handleStatusChange('success'));
      dispatch(resetEditRowData());
    },
    (err) => {}
  );
};

export const deleteProperty = () => (dispatch, getState) => {
  const { tableData } = getState().propertyDetails;
  const { listType } = getState().filters;
  const { page, rowsPerPage, selection } = tableData;
  postData(API_DELETE_PROPERTY, Object.keys(selection)).then(
    (res) => {
      dispatch(getProperty({ listType, page, rowsPerPage }));
      dispatch(setPropertyData({ selection: {} }));
    },
    (err) => {}
  );
};

export const getProperty =
  (pageData, filters = null) =>
  (dispatch) => {
    dispatch({ type: SHOW_LOADER });
    postData(API_GET_PROPERTY, { pageData, filters }).then(
      (res) => {
        dispatch(setPropertyData(res.data));
        dispatch({ type: HIDE_LOADER });
      },
      (err) => {
        dispatch({ type: HIDE_LOADER });
      }
    );
  };

export const getMetrix = () => (dispatch) => {
  dispatch({ type: SHOW_LOADER });
  getData(API_GET_METRIX).then(
    (res) => {
      dispatch(setMetrixData(res.data));
      dispatch({ type: HIDE_LOADER });
    },
    (err) => {
      dispatch({ type: HIDE_LOADER });
    }
  );
};

export const applyFilter = () => (dispatch, getState) => {
  const { listType, inputSearch } = getState().filters;
  dispatch({ type: SHOW_LOADER });
  postData(API_FILTER, { listType, inputSearch }).then(
    (res) => {
      // dispatch(setPropertyData(res.data));
      dispatch({ type: HIDE_LOADER });
    },
    (err) => {
      dispatch({ type: HIDE_LOADER });
    }
  );
};
