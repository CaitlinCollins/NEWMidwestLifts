import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Flooring from './components/Flooring/Flooring';
import Lighting from './components/Lighting/Lighting';
import Lifts from './components/Lifts/Lifts';
import Galleries from './components/Galleries/Galleries';
import './App.scss';

function App() {
  return (
    <div>
      <Router>
      <Header/>
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home/>
          </Route>
          <Route exact path="/lifts">
            <Lifts/>
          </Route>
          <Route exact path="/lighting">
            <Lighting/>
          </Route>
          <Route exact path="/flooring">
            <Flooring/>
          </Route>
          <Route exact path="/galleries">
            <Galleries/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
