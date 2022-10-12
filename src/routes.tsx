import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Index from "./pages/Index";
import Questions from "./pages/Questions";
import CreateQuestion from "./pages/CreateQuestion";
import EditQuestion from "./pages/EditQuestion";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Index} exact />
        <Route path="/admin" component={Questions} exact />
        <Route path="/admin/question/create" component={CreateQuestion} exact />
        <Route path="/admin/question/:id" component={EditQuestion} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
