import { useInView } from "react-intersection-observer";
import { useAnimationControls } from "framer-motion";

export const useScroll = (thresh = 0.2) => {
  const controls = useAnimationControls();
  const [element, view] = useInView({ threshold: thresh, triggerOnce: true});

  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  return [element, controls];
};
