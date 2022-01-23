import { AnimatePresence } from "framer-motion";
import * as React from "react";
import { Nav, Menu, Bars, List, Item, Link } from "../styles/NavMobileStyles";
import useToggleMenu from "../../utils/useToggleMenu";
import Icon from "../Icon";
import { planets } from "../../constants/data.js";

const NavMobile = ({ windowWidth }) => {
  const [handleToggle, restoreToDefault, isOpen, isExpanded, tabletBreakpoint] =
    useToggleMenu();

  function handleResize() {
    if (windowWidth >= tabletBreakpoint) {
      restoreToDefault();
    } else {
      return;
    }
  }
  React.useEffect(() => {
    handleResize();
  }, [windowWidth]);

  return (
    <Nav>
      <Menu
        aria-label="Menu toggle"
        aria-expanded={isExpanded}
        aria-controls="nav-list"
        onClick={handleToggle}
      >
        <Bars isOpen={isOpen} />
      </Menu>
      <AnimatePresence>
        {isOpen && (
          <List
            id="nav-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "linear", duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <Items restoreToDefault={restoreToDefault} />
          </List>
        )}
      </AnimatePresence>
    </Nav>
  );
};

const Items = ({ restoreToDefault }) => {
  return planets.map((planet) => (
    <Item
      key={planet.id}
      initial={{ x: `100vw` }}
      animate={{ x: "0vw" }}
      transition={{
        ease: [0.06, 0.9, 1, 0.98],
        duration: 0.7,
        delay: `${(planet.id * 5 + 0.5) / 100}`,
      }}
    >
      <Link
        to={planet.path}
        color={planet.color}
        onClick={() => restoreToDefault()}
      >
        {planet.name}
        <Icon
          name="icon-chevron1"
          size={20}
          color="hsl(240, 6%, 54%)"
          customStyle={{ marginTop: "5px" }}
        />
      </Link>
    </Item>
  ));
};

export default NavMobile;
