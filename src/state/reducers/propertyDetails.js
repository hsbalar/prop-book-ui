import {
  GET_PROPERTY_LIST,
  ON_CHANGE_FIELD,
  CHANGE_STATUS,
  RESET_DETAILS,
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
  buyer: {
    list: [],
    total: 0,
  },
  seller: {
    list: [],
    total: 0,
  },
  propertyDetails,
  status: null,
};

export default function property(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
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
