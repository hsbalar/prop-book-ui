import { GET_PROPERTY_LIST, ON_CHANGE_FIELD } from '../actions/types';

const initialState = {
  buyer: {
    list: [],
    total: 0,
  },
  seller: {
    list: [],
    total: 0,
  },
  propertyDetails: {
    personName: null,
    personPhone: null,
    saleType: null,
    listType: 'buy',
    categoryType: null,
    propertyType: null,
    city: null,
    projectName: null,
    locality: null,
    address: null,
    bedrooms: null,
    noOfFloors: null,
    propertyFloorNo: null,
    price: null,
    pricePerUnit: null,
    area: null,
    areaUnit: null,
    about: null,
    availableFrom: null,
  },
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
    default:
      return state;
  }
}
