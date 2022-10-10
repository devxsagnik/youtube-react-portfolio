export const linkVariants = {
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      type: "spring",
    },
  }),
  hidden: { opacity: 0, y: "50%" },
};
export const imageVariants = {
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: 0.2,
      type: "spring",
      duration: 1,
    },
  },
  hidden: { opacity: 0, x: "-50%", y: "100%" },
};

export const homeVariants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration: 1,
      delay: 0.2,
    },
  },
  hidden: { opacity: 0, x: "-100vw" },
};

export const homeBannerVariants = {
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      duration: 1,
      delay: 0.2,
    },
  },
  hidden: { opacity: 0, x: "100vw", y: "50%" },
};

export const aboutVariants = {
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.2,
      type: "spring",
      bounce: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    y: "100%",
  },
};

export const aboutBannerVariants = {
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      delay: 0.03,
      type: "spring",
      bounce: 0.4,
    },
  },
  hidden: {
    opacity: 0,
    y: "100%",
  },
};

export const skillsVariants = {
  visible: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,  
      delay: 0.2,
      type: "spring",
      bounce: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    x: "-100%",
    y: "50%",
  },
};

export const skillsBannerVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.03,
      type: "spring",
      duration: 0.8,
      bounce: 0.4,
    },
  },
  hidden: {
    opacity: 0,
    y: "100%",
  },
};