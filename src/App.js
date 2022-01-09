
import React from 'react';
import Login from './view/Login';
import Dashboard from './view/students/Dashboard/Dashboard';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
function App() {
  return (
    <Router>
      
    <main>
       <Switch>
    
       
          <Route path="/" exact>
           
                <Login/>
          </Route>
          <Route path="/user" exact>
           
                <Dashboard/>
          </Route>
       <Redirect to="/" />
      </Switch>

    </main>
    </Router>
    
  );
}

export default App;
