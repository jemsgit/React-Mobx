
import React from "react";
import ReactDOM from "react-dom";
import { Provider} from 'mobx-react';
import Router from './routes';
import store from './stores/rootStore';
import { MobxProvider } from './stores/rootStore';

ReactDOM.render((
    <MobxProvider value={store}>
        <Router />
    </MobxProvider>
  ), document.querySelector("#root"));