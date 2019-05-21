import React from "react";

import Form from "./login";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Switch>
      <Route path="/Dashboard" component={Dashboard} />
      <Route path="/" component={Form} />
    </Switch>
  );
}

export default App;
