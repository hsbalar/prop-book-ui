import {
  SET_FILTER_TYPE,
  CHANGE_FILTER_TEXT,
  SET_COLUMNS,
  CHANGE_ADVANCE_FILTER,
  RESET_ADVANCE_FILTER,
  SET_ADVANCE_FILTER_RESULT,
} from '../actions/types';
import { columns } from '../../modules/constants';

const getColumns = () => {
  const savedColumnsOrder = localStorage.getItem('columns');
  if (savedColumnsOrder) return JSON.parse(savedColumnsOrder);
  else return columns;
};

const initFilters = {
  projectName: '',
  personName: '',
  address: '',
  city: '',
  locality: '',
  postBy: '',
  propertyType: '',
  bedrooms: '',
  price: ['', ''],
  pricePerUnit: ['', ''],
  builtUpArea: ['', ''],
  createdAt: [null, null],
  availableFrom: [null, null],
  isNewProperty: '',
};

const initialState = {
  listType: 'Buy',
  inputSearch: '',
  columns: [...getColumns()],
  advanceFilters: initFilters,
  filterResult: [],
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
    case CHANGE_ADVANCE_FILTER:
      return {
        ...state,
        advanceFilters: {
          ...state.advanceFilters,
          ...action.fields,
        },
      };
    case RESET_ADVANCE_FILTER:
      return {
        ...state,
        advanceFilters: initFilters,
      };
    case SET_ADVANCE_FILTER_RESULT:
      return {
        ...state,
        filterResult: action.res,
      };
    default:
      return state;
  }
}
