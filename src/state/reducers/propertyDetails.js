import {
  GET_PROPERTY_LIST,
  ON_CHANGE_FIELD,
  CHANGE_STATUS,
  RESET_DETAILS,
  SET_PROPERTY_LIST,
  UPDATE_PROPERTY,
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
  bedrooms: '2 BHK',
  noOfFloors: '',
  propertyFloorNo: '',
  about: '',
  areaUnit: 'Square Feet',
  price: 0,
  pricePerUnit: 0,
  builtUpArea: 0,
  carpetArea: 0,
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
    default:
      return state;
  }
}
