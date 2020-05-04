import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { ProtectedRoute } from 'src/router/protectedRout';
import App from 'src/App';
import { SignUp } from 'src/pages';

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <ProtectedRoute
          exact
          path="/"
          component={App}
          isAuthenticated={false}
          restrictedPath="/"
          authenticationPath="/signup"
        />
        <Route exact path="/signup" component={SignUp} />
        <Redirect from="*" to="/signup" />
      </Switch>
    </Router>
  );
};
