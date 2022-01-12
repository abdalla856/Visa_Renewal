import React from "react";
import Login from "./view/Login";
import Dashboard from "./view/students/Dashboard/Dashboard";
import VisaApplication from "./view/students/Visa_Application/visaApplcation";
import IkadApplicatoin from "./view/students/Visa_Application/i-kadApplication";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/user" exact>
            <Dashboard />
          </Route>
          <Route path="/visaApplication" exact>
            <VisaApplication/>
          </Route>
          <Route path="/ikadApplication" exact>
            <IkadApplicatoin/>
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
