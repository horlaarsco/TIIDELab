import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, About, Contact, Gallery } from "./pages";
import { Header, Footer } from "./components";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path='/gallery'>
            <Gallery />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
