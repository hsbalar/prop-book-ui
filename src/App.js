import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import Home from './components/Home';
import AddPropertyDetails from './modules/add-property';

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
  // eslint-disable-next-line no-unused-vars
  const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());
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
        <div className={classes.root}>
          <CssBaseline />
          {currentUser && (
            <>
              <Header />
              <Sidebar />
            </>
          )}
          <main className={currentUser ? classes.content : ''}>
            <PrivateRoute exact path="/" component={Home} />
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
            <PageLoadingBackdrop /> */}
        </div>
      </Provider>
    </BrowserRouter>
  );
}
