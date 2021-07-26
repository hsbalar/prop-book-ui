import { ON_CHANGE_FIELD, CHANGE_STATUS } from './types';
import { getData, postData } from '../services/api.service';

const SAVE_PROPERTY = '/save-property';

export const handleFieldChange = (payload) => ({
  type: ON_CHANGE_FIELD,
  payload,
});

export const handleStatusChange = (status) => ({
  type: CHANGE_STATUS,
  status,
});

export const saveProperty = () => (dispatch, getState) => {
  const { propertyDetails } = getState().propertyDetails;
  postData(SAVE_PROPERTY, propertyDetails).then(
    (res) => {
      dispatch(handleStatusChange('success'));
    },
    (err) => {}
  );
};

export const getProperty = (type) => (dispatch, getState) => {
  const { propertyDetails } = getState().propertyDetails;
  getData(SAVE_PROPERTY, propertyDetails).then(
    (res) => {
      dispatch(handleStatusChange('success'));
    },
    (err) => {}
  );
};
