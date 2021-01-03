import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from '../src/screens/Login';
import Register from '../src/screens/Register';

function Routes(){
  return(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </Switch>        
      </BrowserRouter>
  );
};

export default Routes;