import { combineReducers } from 'redux';
import auth from './auth';
import propertyDetails from './propertyDetails';
import loaders from './loaders';
import filters from './filters';

export default combineReducers({
  auth,
  loaders,
  filters,
  propertyDetails,
});
