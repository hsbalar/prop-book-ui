import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import Home from './components/Home';
import Loader from './components/Loader';
import AddPropertyDetails from './modules/add-property';
import AllProperty from './modules/all-property';
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
        <Box className={classes.root}>
          <CssBaseline />
          {currentUser && (
            <>
              <Header />
              <Sidebar />
            </>
          )}
          <main className={currentUser ? classes.content : ''}>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/properties" component={AllProperty} />
            <PrivateRoute
              exact
              path="/add-property-details"
              component={AddPropertyDetails}
            />
          </main>
          {!currentUser && <Route exact path="/login" component={Login} />}
          {/* <Notification
              onCloseHandler={() => store.dispatch(hideNotifications())}
            />
          */}
          <Loader />
        </Box>
      </Provider>
    </BrowserRouter>
  );
}
