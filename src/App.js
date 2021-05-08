import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
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
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -240,
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

  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className={classes.root}>
          <CssBaseline />
          {currentUser ? (
            <>
              <Header />
              <Sidebar />
              <main>
                {routes.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    component={route.component}
                    exact={route.exact}
                  />
                ))}
                <Route exact path="*" render={() => <Redirect to="/" />} />
              </main>
            </>
          ) : (
            <>
              <Route exact path="/login" component={Login} />
              <Route exact path="*" render={() => <Redirect to="/login" />} />
            </>
          )}
          {/* <Notification
              onCloseHandler={() => store.dispatch(hideNotifications())}
            />
            <PageLoadingBackdrop /> */}
        </div>
      </Provider>
    </BrowserRouter>
  );
}
