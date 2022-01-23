import { Illustration, Image } from "../styles/IllustrationStyles";
import { illustrationContainerVariants } from "../../constants/container";

const IllustrationContainer = ({ planetData, currentData, isChanging }) => {
  return (
    <Illustration
      variants={illustrationContainerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Image
        image={currentData.image}
        geo={currentData.geo ? currentData.geo : false}
        desktopImgWidth={planetData.desktopImgWidth}
        tabletImgWidth={planetData.tabletImgWidth}
        mobileImgWidth={planetData.mobileImgWidth}
        isChanging={isChanging ? true : false}
      />
    </Illustration>
  );
};

export default IllustrationContainer;
