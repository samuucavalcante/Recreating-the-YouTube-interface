import React from 'react';

import { BrowserRouter, Switch, Route  } from 'react-router-dom';

import Home from '../pages/Home';

import GlobalStyles from '../styles/global';

const Router = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route  path="/" exact component={Home} />
      </Switch>
      <GlobalStyles />
    </BrowserRouter>
  </>
)
export default Router;