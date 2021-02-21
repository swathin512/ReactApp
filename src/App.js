import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, About, Contact, Resume, Responsive, Theme } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/resume" exact component={() => <Resume />} />
          <Route path="/responsive" exact component={() => <Responsive />} />
          <Route path="/theme" exact component={() => <Theme />} />
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;