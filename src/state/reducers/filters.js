import { SET_FILTER_TYPE } from '../actions/types';

const initialState = {
  listType: 'Buy',
};

export default function filters(state = initialState, action) {
  const { type, listType } = action;

  switch (type) {
    case SET_FILTER_TYPE:
      return {
        ...state,
        listType,
      };
    default:
      return state;
  }
}
