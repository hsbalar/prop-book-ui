import { SET_FILTER_TYPE } from './types';

export const handleFilterTypeChange = (listType) => ({
  type: SET_FILTER_TYPE,
  listType,
});
