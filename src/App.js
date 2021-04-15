import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import {
  Navigation,
  Home,
  Purchase,
  Wallet,
  Bounty,
  Gallery,
  About,
  Grid
} from "./components";

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Navigation />
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/Purchase" exact component={() => <Purchase />} />
            <Route path="/Wallet" exact component={() => <Wallet />} />
            <Route path="/Bounty" exact component={() => <Bounty />} />
            <Route path="/Gallery" exact component={() => <Gallery />} />
            <Route path="/About" exact component={() => <About />} />
            <Route path="/Grid" exact component={() => <Grid />} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;