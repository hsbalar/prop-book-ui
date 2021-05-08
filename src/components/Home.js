import React from 'react';
import * as AuthService from '../state/services/auth.service';

const Home = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> Home
        </h3>
      </header>
    </div>
  );
};

export default Home;
