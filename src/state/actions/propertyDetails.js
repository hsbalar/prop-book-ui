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

export const saveProperty = (payload) => (dispatch) => {
  postData(SAVE_PROPERTY, payload).then(
    (res) => {
      console.log(res);
    },
    (err) => {}
  );
};
