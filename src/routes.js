import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from '../src/screens/Login';
import Register from '../src/screens/Register';
import CadastrePurchases from './screens/CadastrePurchases';
import ListPurchases from './screens/ListPurchases';
import CashBack from '../src/screens/CashBack';

function Routes(){
  return(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/cadastre-purchases" exact component={CadastrePurchases} />
          <Route path="/list-purchases" exact component={ListPurchases} />
          <Route path="/cashback" exact component={CashBack} />
        </Switch>        
      </BrowserRouter>
  );
};

export default Routes;