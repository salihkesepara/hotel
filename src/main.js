import React, { Component } from "react";
import { Provider } from "react-redux";
import { Router, Switch, Route } from 'react-router-dom';
import configureStore from "./store/configureStore";
import Home from "./containers/home";
import Details from "./containers/details";
import Payment from "./containers/payment";
import "./assets/styles/main.scss";
import history from "./history";

const store = configureStore();

class Main extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router history={history}>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/details' component={Details} />
              <Route path='/payment' component={Payment} />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default Main;
