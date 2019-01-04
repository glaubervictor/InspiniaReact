import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import DashboardIndex from "../pages/dashboard/index";
import TesteIndex from "../pages/teste/index";

export default class Routes extends Component {
  render() {
    const { router, params, location, routes } = this.props;
    return (
      <Switch>
        <Route path="/" exact={true} component={DashboardIndex} />
        <Route path="/teste" component={TesteIndex} />
        <Route path="*" component={DashboardIndex} />
      </Switch>
    );
  }
}
