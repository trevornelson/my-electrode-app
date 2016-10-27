import React from "react";
import {Route, IndexRoute} from "react-router";
import Home from "./components/home";
import Calculator from "./components/calculator";

export const routes = (
  <Route>
    <Route path="/" component={Home}/>
    <Route path="/calculator" component={Calculator}/>
  </Route>
);
