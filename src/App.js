import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Films from './components/films/Films';
import Showcase from './components/showcase/Showcase';
import Schedule from './components/schedule/Schedule';
import './App.css';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/films" component={Films} />
          <Route exact path="/films/:id" component={Showcase} />
          <Route exact path="/schedule" component={Schedule} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
