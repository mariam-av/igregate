import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { CreateTrackingLink } from "./components/trackingLink/create";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|desktop-10)">
          <CreateTrackingLink />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
