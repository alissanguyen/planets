import {
  Intro,
  Title,
  Text,
  SourceContainer,
  Span,
  Link,
} from "../styles/IntroStyles";
import Icon from "../Icon/Icon";
import { introContainerVariants } from "../../constants/container";

const IntroContainer = ({ planetData, currentData, isChanging }) => {
  return (
    <Intro
      variants={introContainerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Title>{planetData.name}</Title>
      <Text aria-live="assertive" isChanging={isChanging}>
        {currentData.content}
      </Text>
      <SourceContainer>
        <Span>Source: </Span>
        <Link href={currentData.source} planetData={planetData}>
          Wikipedia
          <Icon name="source" size={12} color="hsl(240, 6%, 54%)" />
        </Link>
      </SourceContainer>
    </Intro>
  );
};

export default IntroContainer;
