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
    price: '',
    pricePerUnit: '',
    areaUnit: 'Square Feet',
    builtUpArea: '',
    carpetArea: '',
    about: '',
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
