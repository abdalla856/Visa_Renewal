
import React from 'react';
import Login from './view/Login';

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
       <Redirect to="/" />
      </Switch>

    </main>
    </Router>
    
  );
}

export default App;
