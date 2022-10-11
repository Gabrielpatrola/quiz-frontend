import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Index from "./pages/Index";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Index} exact />
    </BrowserRouter>
  );
}

export default Routes;
