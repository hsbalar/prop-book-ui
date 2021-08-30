import {
  SET_FILTER_TYPE,
  CHANGE_FILTER_TEXT,
  SET_COLUMNS,
} from '../actions/types';
import { columns } from '../../modules/constants';

const initialState = {
  listType: 'Buy',
  inputSearch: '',
  columns,
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
    case SET_COLUMNS:
      return {
        ...state,
        columns: [...action.fields],
      };
    default:
      return state;
  }
}
