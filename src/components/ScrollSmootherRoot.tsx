import { useLayoutEffect } from "react";
import {
  killScrollSmoother,
  setupScrollSmoother,
} from "./utils/scrollSmooth";

/**
 * Must render before any descendant creates ScrollTriggers (e.g. Work pin).
 * Initializes ScrollSmoother + scrollerProxy so ScrollTrigger uses #smooth-wrapper.
 */
const ScrollSmootherRoot = () => {
  useLayoutEffect(() => {
    setupScrollSmoother();
    return () => killScrollSmoother();
  }, []);
  return null;
};

export default ScrollSmootherRoot;
