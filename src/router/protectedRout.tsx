import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

export interface ProtectedRouteProps extends RouteProps {
  isAuthenticated: boolean;
  restrictedPath: string;
  authenticationPath: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = (props) => {
  let redirectPath = '';
  if (!props.isAuthenticated) {
    redirectPath = props.authenticationPath;
  }

  if (redirectPath) {
    const renderComponent = () => <Redirect to={{ pathname: redirectPath }} />;
    return <Route {...props} component={renderComponent} render={undefined} />;
  }

  return <Route {...props} />;
};
