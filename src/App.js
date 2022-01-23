import "./App.css";
import * as React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Provider from "./components/Provider";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar/Navbar";
function App() {
  const location = useLocation();
  const [activePlanet, setActivePlanet] = React.useState("/");

  return (
    <Provider>
      <Wrapper>
        <Navbar
          pathName={location.pathname}
          onHover={setActivePlanet}
          activePlanet={activePlanet}
        />
        <AnimatePresence>
          <Routes location={location} key={location.key}>
            <Route exact path="/mercury">
              {/* <Mercury /> */}
            </Route>
            <Route exact path="/venus">
              {/* <Venus /> */}
            </Route>
            <Route exact path="/earth">
              {/* <Earth /> */}
            </Route>
            <Route exact path="/mars">
              {/* <Mars /> */}
            </Route>
            <Route exact path="/jupiter">
              {/* <Jupiter /> */}
            </Route>
            <Route exact path="/saturn">
              {/* <Saturn /> */}
            </Route>
            <Route exact path="/uranus">
              {/* <Uranus /> */}
            </Route>
            <Route exact path="/neptune">
              {/* <Neptune /> */}
            </Route>
            <Route exact path="/">
              {/* <KeyVisual activePlanet={activePlanet} /> */}
            </Route>
          </Routes>
        </AnimatePresence>
      </Wrapper>
    </Provider>
  );
}

export default App;
