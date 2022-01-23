export const illustrationContainerVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    rotate: "20deg",
    x: 200,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    x: 0,
    transition: { delay: 1, duration: 1.5 },
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    rotate: "-20deg",
    x: -200,
    transition: { duration: 1 },
  },
};

export const introContainerVariants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 1.5, duration: 1.5 },
  },
  exit: {
    opacity: 0,
    x: 50,
    transition: { duration: 1 },
  },
};


export const infoContainerVariants = {
    hidden: {
        opacity: 0,
        y: 25,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: { delay: 1.5, duration: 1.5 },
    },
    exit: {
        opacity: 0,
        y: 25,
        transition: { duration: 1 },
    },
};

export const tabsContainerVariants = {
    hidden: {
        opacity: 0,
        x: 50,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: { delay: 1.5, duration: 1.5 },
    },
    exit: {
        opacity: 0,
        x: 50,
        transition: { duration: 1 },
    },
};