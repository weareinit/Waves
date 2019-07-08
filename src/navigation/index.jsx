import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from "../pages/landing";
import Sponsor from "../pages/sponsor";

const AppRouter = () => (
  <Router>
    <Route path="/" exact component={Landing} />
    <Route path="/sponsor" component={Sponsor} />
  </Router>
);

export default AppRouter();
