import React from 'react';
import './App.css';
import history from "./services/history";
import {Router, Route, Switch} from "react-router-dom";
import PlantListComponent from "./components/PlantListComponent";
import HomeComponent from "./components/HomeComponent";
import HeaderComponent from "./components/HeaderComponent";

function App() {
  return (
    <div className="App">
        <HeaderComponent/>
      <Router history={history}>
        <Switch>
          <Route exact={true} path={['/', '/home']} component={HomeComponent}/>
          <Route exact={true} path='/list' component={PlantListComponent}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
