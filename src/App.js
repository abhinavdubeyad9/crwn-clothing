import React from 'react';
import {Switch, Route} from 'react-router-dom'

import './App.css';
import HomePage from './pages/homepage/homepage.component'

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
         <Route exact path='/' component={HomePage} />
         <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}
//a route has 3 props history, location and match , and they are very usefull

export default App;

// exact keyword specifies that ..exactly / is used for this path
//Using switch will only render the route with given path and other parts will not render