import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import FoodItems from './Components/FoodItems/FoodItems';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header/>
            <Banner/>
            <FoodItems/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
