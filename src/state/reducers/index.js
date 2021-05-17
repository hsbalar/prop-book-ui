import { combineReducers } from 'redux';
import auth from './auth';
import propertyDetails from './propertyDetails';

export default combineReducers({
  auth,
  propertyDetails,
});
