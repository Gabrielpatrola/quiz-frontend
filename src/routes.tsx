import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Index from "./pages/Index";
import Questions from "./pages/Questions";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Index} exact />
        <Route path="/admin" component={Questions} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
