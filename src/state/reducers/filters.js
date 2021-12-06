import {
  SET_FILTER_TYPE,
  CHANGE_FILTER_TEXT,
  SET_COLUMNS,
  ADVANCE_FILTER_CHANGE,
} from '../actions/types';
import { columns } from '../../modules/constants';

const getColumns = () => {
  const savedColumnsOrder = localStorage.getItem('columns');
  if (savedColumnsOrder) return JSON.parse(savedColumnsOrder);
  else return columns;
};

const initialState = {
  listType: 'Buy',
  inputSearch: '',
  columns: [...getColumns()],
  advanceFilters: {
    projectName: '',
    address: '',
    city: '',
    postBy: '',
    propertyType: '',
    bedrooms: '',
    price: [0, 100],
    pricePerUnit: [0, 100],
    builtUpArea: [0, 100],
    createdAt: [null, null],
    availableFrom: [null, null],
  },
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
    case ADVANCE_FILTER_CHANGE:
      return {
        ...state,
        advanceFilters: {
          ...state.advanceFilters,
          ...action.fields,
        },
      };
    default:
      return state;
  }
}
