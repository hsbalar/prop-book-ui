import Home from '../components/Home';
import AddPropertyDetails from '../modules/add-buyer/AddPropertyDetails';

const routes = [
  {
    path: '/',
    search: '?*=*',
    component: Home,
    exact: true,
  },
  {
    path: '/add-property-details',
    search: '?*=*',
    component: AddPropertyDetails,
    exact: true,
  },
];

export default routes;
