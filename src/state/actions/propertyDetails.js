import { ON_CHANGE_FIELD } from './types';

export const handleFieldChange = (payload) => ({
  type: ON_CHANGE_FIELD,
  payload,
});
