import React from 'react';
import './App.css';
import { Route , Link, Switch, Redirect } from 'react-router-dom';

import Login from './Components/Login';
import FriendsList from './Components/FriendsList';
import PrivateRoute from './Components/PrivateRoute';

const App = () => {
  return (
    <div className="App">
      <Link to="/api/login">Login</Link>
      <Link to="/protected">FriendsList</Link>
      <Switch>
        <PrivateRoute exact path="/protected" component={FriendsList} />
        <Route path="/api/login" component={Login} />
        <Redirect to="/api/login" />
      </Switch>
      
    </div>
  );
};

export default App;
