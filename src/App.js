import React from "react";
import Login from "./view/Login";
import Dashboard from "./view/students/Dashboard/Dashboard";
import VisaApplication from "./view/students/Applications/visaApplcation";
import IkadApplicatoin from "./view/students/Applications/i-kadApplication";
import Payment from "./view/students/Payment/Payment";
import Reupload from "./view/students/re-upload/Re-upload";
import Progress from "./view/students/Progress/progress"; 
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
          <Route path="/payment" exact>
            <Payment/>
          </Route>
          <Route path="/re-upload" exact>
            <Reupload/>
          </Route>
          <Route path="/progress" exact>
            <Progress/>
          </Route>
          <Redirect to="/user" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
