import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, About, Contact, Gallery } from "./pages";
import { Header, Footer } from "./components";
import styled from "styled-components";

function App() {
  return (
    <Router>
      <Wrapper>
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
      </Wrapper>
    </Router>
  );
}

export default App;

const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
`;
