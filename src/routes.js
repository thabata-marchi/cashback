import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from '../src/screens/Login';
import Register from '../src/screens/Register';
import BuyRegister from '../src/screens/BuyRegister';
import ListBuy from '../src/screens/ListBuy';
import CashBack from '../src/screens/CashBack';

function Routes(){
  return(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/buy-register" exact component={BuyRegister} />
          <Route path="/list-buy" exact component={ListBuy} />
          <Route path="/cashback" exact component={CashBack} />
        </Switch>        
      </BrowserRouter>
  );
};

export default Routes;