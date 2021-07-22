import { ON_CHANGE_FIELD } from './types';
import { getData, postData } from '../services/api.service';

const SAVE_PROPERTY = '/save-property';

export const handleFieldChange = (payload) => ({
  type: ON_CHANGE_FIELD,
  payload,
});

export const saveProperty = (payload) => (dispatch) => {
  postData(SAVE_PROPERTY, payload).then(
    (res) => {
      console.log(res);
    },
    (err) => {}
  );
};
