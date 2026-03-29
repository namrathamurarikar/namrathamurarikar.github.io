import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { smoother } from "./scrollSmooth";
import {
  registerScrollSectionAnimations,
  setAllTimeline,
} from "./GsapScroll";

/** Enables scrolling when the loading screen is dismissed without running full initialFX. */
export function unlockAfterLoad() {
  document.body.style.overflowY = "auto";
  smoother?.paused(false);
  const main = document.getElementsByTagName("main")[0];
  if (main && !main.classList.contains("main-active")) {
    main.classList.add("main-active");
  }
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 0.2,
  });
}

export function initialFX() {
  document.body.style.overflowY = "auto";
  smoother?.paused(false);
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  var landingText = new SplitText([".landing-intro h2", ".landing-intro h1"], {
    type: "chars,lines",
    linesClass: "split-line",
  });
  gsap.fromTo(
    landingText.chars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.025,
      delay: 0.3,
    }
  );

  gsap.fromTo(
    ".landing-h2-1",
    { opacity: 0, y: 28 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.75,
    }
  );
  gsap.fromTo(
    ".landing-h2-2",
    { opacity: 0, y: 28 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.92,
    }
  );
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  requestAnimationFrame(() => {
    registerScrollSectionAnimations();
    setAllTimeline();
    ScrollTrigger.refresh();
  });
}
