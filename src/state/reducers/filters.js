import { SET_FILTER_TYPE, CHANGE_FILTER_TEXT } from '../actions/types';

const initialState = {
  listType: 'Buy',
  inputSearch: '',
};

export default function filters(state = initialState, action) {
  const { type } = action;

  switch (type) {
    case SET_FILTER_TYPE:
      return {
        ...state,
        listType: action.listType,
      };
    case CHANGE_FILTER_TEXT:
      return {
        ...state,
        inputSearch: action.inputSearch,
      };
    default:
      return state;
  }
}
