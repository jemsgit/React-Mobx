import React from 'react';

import { Switch } from 'react-router-dom'
import { BrowserRouter, Route } from 'react-router-dom'
//import createBrowserHistory from 'history/createBrowserHistory'

//import PrivateRoute from './components/privateRoute/privateRoute'
import Login from './components/login/login';

//const history = createBrowserHistory();

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Login} />
        </Switch>
    </BrowserRouter>
);