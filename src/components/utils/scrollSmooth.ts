import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

export let smoother: ScrollSmoother | undefined;

export function setupScrollSmoother() {
  smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1.7,
    speed: 1.7,
    effects: true,
    autoResize: true,
    ignoreMobileResize: true,
  });

  ScrollTrigger.defaults({ scroller: "#smooth-wrapper" });
  ScrollTrigger.scrollerProxy("#smooth-wrapper", {
    scrollTop(value) {
      if (arguments.length && smoother && value !== undefined) {
        smoother.scrollTop(value);
      }
      return smoother ? smoother.scrollTop() : 0;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      } as DOMRect;
    },
    pinType: "transform",
  });

  smoother.scrollTop(0);
  smoother.paused(true);
  ScrollTrigger.refresh(true);
}

export function killScrollSmoother() {
  smoother?.kill();
}
