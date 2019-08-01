import React from "react";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";

import Landing from "../pages/landing";
import P_404 from "../pages/p_404";
// import Live from "../pages/live";

const AppRouter = () => (
  <Router>
    <Switch>
    <Route path="/" exact component={Landing} />
    {/* <Route path="/live" component={Live} /> */}
    <Route component={P_404} />
    </Switch>
  </Router>
);

export default AppRouter();
