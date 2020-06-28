import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Home, About, Contact, Gallery } from "./pages";
import { Header} from "./components";
import Footer from "./components/Footer/Footer";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Gallery = lazy(() => import("./pages/Gallery"));

function App() {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Router>
        <div>
          {/* <Header /> */}
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            {/* <Route path="/" exact>
              <Gallery />
            </Route> */}
          </Switch>
          {/* <Footer /> */}
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
