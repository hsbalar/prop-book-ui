import {
  GET_PROPERTY_LIST,
  ON_CHANGE_FIELD,
  CHANGE_STATUS,
  RESET_DETAILS,
  SET_PROPERTY_LIST,
  UPDATE_PROPERTY,
  SET_METRIX_DATA,
} from '../actions/types';

const propertyDetails = {
  personName: '',
  personPhone: '',
  address: '',
  locality: '',
  projectName: '',
  postBy: 'Broker',
  isNewProperty: 'New',
  listType: 'Buy',
  categoryType: '',
  propertyType: '',
  city: 'Surat',
  bedrooms: '',
  noOfFloors: '',
  propertyFloorNo: '',
  about: '',
  areaUnit: 'Square Feet',
  price: null,
  pricePerUnit: null,
  builtUpArea: null,
  carpetArea: null,
  isNegotiable: false,
  availableFrom: '',
};

const initialState = {
  tableData: {
    list: [],
    page: 0,
    total: 0,
    rowsPerPage: 5,
    selection: {},
  },
  metrix: {
    buy: 0,
    sell: 0,
    rent: 0,
  },
  propertyDetails,
  status: null,
};

export default function property(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_PROPERTY_LIST:
      return {
        ...state,
        tableData: {
          ...state.tableData,
          ...action.payload,
        },
      };
    case GET_PROPERTY_LIST:
      return {
        ...state,
        isLoggedIn: false,
      };
    case ON_CHANGE_FIELD:
      return {
        ...state,
        propertyDetails: {
          ...state.propertyDetails,
          ...payload,
        },
      };
    case UPDATE_PROPERTY:
      return {
        ...state,
        propertyDetails: {
          ...payload,
        },
      };
    case RESET_DETAILS:
      return {
        ...state,
        propertyDetails: { ...propertyDetails },
      };
    case CHANGE_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case SET_METRIX_DATA:
      return {
        ...state,
        metrix: { ...state.metrix, ...action.payload },
      };
    default:
      return state;
  }
}
