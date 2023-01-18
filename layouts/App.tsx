import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import loadable from '@loadable/component';

const LogIn = loadable(() => import('@pages/Login'));
const SignUp = loadable(() => import('@pages/SignUp'));

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  );
};

export default App;
