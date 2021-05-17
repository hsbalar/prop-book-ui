import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import store from './state/store';
import routes from './routes';
import * as AuthService from './state/services/auth.service';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
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
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

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
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
                exact={route.exact}
              />
            ))}
            <Route exact path="/login" component={Login} />
          </main>
          {/* <Notification
              onCloseHandler={() => store.dispatch(hideNotifications())}
            />
            <PageLoadingBackdrop /> */}
        </div>
      </Provider>
    </BrowserRouter>
  );
}
