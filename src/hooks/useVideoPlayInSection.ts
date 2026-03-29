import { RefObject, useEffect } from "react";

function verticalVisibleRatio(rect: DOMRect, vh: number): number {
  const visible = Math.min(rect.bottom, vh) - Math.max(rect.top, 0);
  if (visible <= 0) return 0;
  return visible / Math.min(Math.max(rect.height, 1), vh);
}

/** True if any part of the rect overlaps the viewport (with 1px slack). */
function intersectsViewport(rect: DOMRect, vh: number): boolean {
  return rect.bottom > 0 && rect.top < vh;
}

type Options = {
  /**
   * When this element is visible enough *and* the main section is almost gone,
   * pause (e.g. pause hero intro only after scrolling past the hero, not while About
   * is merely below the fold).
   */
  pauseWhenSelector?: string;
  pauseWhenVisible?: number;
  /** Pause competitor only if main section visible ratio is below this (default 0.14). */
  pauseWhenMainBelow?: number;
  /** When <video> remounts (new src), re-attach listeners. */
  mediaRevision?: string;
};

/**
 * Play/pause muted video when its section overlaps the viewport.
 * Listens to #smooth-wrapper scroll (ScrollSmoother), not window.
 */
export function useVideoPlayInSection(
  videoRef: RefObject<HTMLVideoElement | null>,
  sectionRef: RefObject<HTMLElement | null>,
  options?: Options
) {
  const pauseSel = options?.pauseWhenSelector;
  const pauseVis = options?.pauseWhenVisible ?? 0.28;
  const pauseMainBelow = options?.pauseWhenMainBelow ?? 0.14;
  const mediaRevision = options?.mediaRevision ?? "";

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const scrollRoot =
      (document.querySelector("#smooth-wrapper") as HTMLElement | null) ??
      window;

    const tick = () => {
      const vh = window.innerHeight;
      const sr = section.getBoundingClientRect();
      const inView = intersectsViewport(sr, vh);
      const mainRatio = verticalVisibleRatio(sr, vh);

      if (pauseSel) {
        const other = document.querySelector(pauseSel);
        if (other) {
          const cr = other.getBoundingClientRect();
          const otherRatio = verticalVisibleRatio(cr, vh);
          if (
            otherRatio > pauseVis &&
            mainRatio < pauseMainBelow
          ) {
            if (!video.paused) video.pause();
            return;
          }
        }
      }

      if (inView) {
        if (video.paused) {
          void video.play();
        }
      } else if (!video.paused) {
        video.pause();
      }
    };

    const io = new IntersectionObserver(tick, {
      threshold: [0, 0.02, 0.08, 0.15, 0.25, 0.4, 0.6, 0.85, 1],
      root: null,
      rootMargin: "0px",
    });
    io.observe(section);

    const onScroll = () => tick();
    scrollRoot.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    const onReady = () => {
      tick();
    };
    video.addEventListener("loadeddata", onReady);
    video.addEventListener("canplay", onReady);

    const onEnded = () => {
      if (!video.loop) return;
      video.currentTime = 0;
      void video.play();
    };
    video.addEventListener("ended", onEnded);

    tick();

    return () => {
      io.disconnect();
      scrollRoot.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      video.removeEventListener("loadeddata", onReady);
      video.removeEventListener("canplay", onReady);
      video.removeEventListener("ended", onEnded);
    };
  }, [
    videoRef,
    sectionRef,
    pauseSel,
    pauseVis,
    pauseMainBelow,
    mediaRevision,
  ]);
}
