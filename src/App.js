import "./App.css";
import * as React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Provider from "./components/Provider";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar/Navbar";
import Mercury from "./routes/Mercury";
import Venus from "./routes/Venus";
import Earth from "./routes/Earth";
import Mars from "./routes/Mars";
import Jupiter from "./routes/Jupiter";
import Saturn from "./routes/Saturn";
import Uranus from "./routes/Uranus";
import Neptune from "./routes/Neptune";
import KeyVisual from "./components/KeyVisual/KeyVisual";

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
            <Route exact path="/mercury" element={<Mercury />}></Route>
            <Route exact path="/venus" element={<Venus />}></Route>
            <Route exact path="/earth" element={<Earth />}></Route>
            <Route exact path="/mars" element={<Mars />}></Route>
            <Route exact path="/jupiter" element={<Jupiter />}></Route>
            <Route exact path="/saturn" element={<Saturn />}></Route>
            <Route exact path="/uranus" element={<Uranus />}></Route>
            <Route exact path="/neptune" element={<Neptune />}></Route>
            <Route
              exact
              path="/"
              element={<KeyVisual activePlanet={activePlanet} />}
            ></Route>
          </Routes>
        </AnimatePresence>
      </Wrapper>
    </Provider>
  );
}

export default App;
