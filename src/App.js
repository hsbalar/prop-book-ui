import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import { LocalizationProvider } from '@material-ui/pickers';
import DateFnsUtils from '@material-ui/pickers/adapter/date-fns';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Page404 from './components/Page404';
import Login from './components/Login';
import Home from './components/Home';
import Loader from './components/Loader';
import AddPropertyDetails from './modules/add-property';
import AllProperty from './modules/all-property';
import AdvanceSearch from './modules/advance-search';
import { getData } from './state/services/api.service';

import store from './state/store';
import * as AuthService from './state/services/auth.service';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function App() {
  const classes = useStyles();
  const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());

  useEffect(() => {
    getData('/init').then(
      (res) => {
        console.log(res.data);
      },
      (err) => {
        setCurrentUser(null);
      }
    );
  }, []);

  const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) =>
          currentUser ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location },
              }}
            />
          )
        }
      />
    );
  };

  return (
    <BrowserRouter>
      <Provider store={store}>
        <LocalizationProvider dateAdapter={DateFnsUtils}>
          <Box className={classes.root}>
            <CssBaseline />
            {currentUser && (
              <>
                <Header />
                <Sidebar />
              </>
            )}
            <main className={currentUser ? classes.content : ''}>
              <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <PrivateRoute
                  exact
                  path="/properties"
                  component={AllProperty}
                />
                <PrivateRoute
                  exact
                  path="/add-property-details"
                  component={AddPropertyDetails}
                />
                <PrivateRoute
                  exact
                  path="/advance-search"
                  component={AdvanceSearch}
                />
                <Route exact path="/login" component={Login} />
                <Route path="*">
                  <Page404 />
                </Route>
              </Switch>
            </main>
            {/* <Notification
              onCloseHandler={() => store.dispatch(hideNotifications())}
            />
          */}
            <Loader />
          </Box>
        </LocalizationProvider>
      </Provider>
    </BrowserRouter>
  );
}
