import { Container, Sun, AsteroidsBelt } from "../styles/KeyVisualStyles";
import { planets } from "../../constants/data";
import PlanetSwitch from "./PlanetSwitch";
import { Route } from "react-router-dom";

const KeyVisual = ({ activePlanet }) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 6,
      rotate: "-40deg",
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { delay: 1, duration: 3 },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      rotate: "-10deg",
      transition: { duration: 1 },
    },
  };

  return (
    <Container
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Route exact path="/" element={<Sun />}></Route>
      {planets.map((planet) => (
        <PlanetSwitch
          data={planet}
          key={planet.id}
          activePlanet={activePlanet}
        />
      ))}
      <AsteroidsBelt />
    </Container>
  );
};

export default KeyVisual;
