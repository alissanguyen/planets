import { Info, Item, Heading, Desc } from "../styles/InfoStyles";
import { infoContainerVariants } from "../../constants/container";

const InfoContainer = ({ planetData }) => {
  return (
    <Info
      variants={infoContainerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Item>
        <Heading>Rotation Time</Heading>
        <Desc>{planetData.rotation}</Desc>
      </Item>
      <Item>
        <Heading>Revolution Time</Heading>
        <Desc>{planetData.revolution}</Desc>
      </Item>
      <Item>
        <Heading>Radius</Heading>
        <Desc>{planetData.radius}</Desc>
      </Item>
      <Item>
        <Heading>Average temp.</Heading>
        <Desc>{planetData.temperature}</Desc>
      </Item>
    </Info>
  );
};

export default InfoContainer;
