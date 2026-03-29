import { useEffect, useRef, useState } from "react";
import "./styles/Landing.css";
import { publicUrl } from "../utils/publicUrl";
import { useVideoPlayInSection } from "../hooks/useVideoPlayInSection";

/** Matches disk: public/videos/Intro_video.mp4 */
const INTRO_PRIMARY = publicUrl("videos/Intro_video.mp4");
const INTRO_ALT = publicUrl("videos/intro_video.mp4");
/** Short public sample — only used in dev if your file is missing from public/videos */
const DEMO_MP4 =
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";

const Landing = () => {
  const landingRef = useRef<HTMLDivElement>(null);
  const introVideoRef = useRef<HTMLVideoElement>(null);
  const candidates = [
    INTRO_PRIMARY,
    INTRO_ALT,
    ...(import.meta.env.DEV ? [DEMO_MP4] : []),
  ];
  const [srcIndex, setSrcIndex] = useState(0);
  const [loadFailed, setLoadFailed] = useState(false);
  const activeSrc = candidates[Math.min(srcIndex, candidates.length - 1)];

  useVideoPlayInSection(introVideoRef, landingRef, {
    pauseWhenSelector: "#about",
    pauseWhenVisible: 0.35,
    pauseWhenMainBelow: 0.12,
    mediaRevision: loadFailed ? "off" : activeSrc,
  });

  useEffect(() => {
    const v = introVideoRef.current;
    if (!v || loadFailed) return;
    const kick = () => {
      void v.play().catch(() => {});
    };
    v.addEventListener("loadeddata", kick);
    v.addEventListener("canplay", kick);
    v.addEventListener("canplaythrough", kick);
    kick();
    return () => {
      v.removeEventListener("loadeddata", kick);
      v.removeEventListener("canplay", kick);
      v.removeEventListener("canplaythrough", kick);
    };
  }, [activeSrc, loadFailed]);

  const onVideoError = () => {
    setSrcIndex((i) => {
      const next = i + 1;
      if (next >= candidates.length) {
        setLoadFailed(true);
        return i;
      }
      return next;
    });
  };

  return (
    <>
      <div className="landing-section" id="landingDiv" ref={landingRef}>
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              NAMRATHA
              <br />
              <span>MURARIKAR</span>
            </h1>
          </div>

          <div className="landing-hero-video-wrap">
            <div className="landing-hero-video-parallax">
              {loadFailed ? (
                <div className="landing-video-fallback" role="status">
                  <p>Add your intro file:</p>
                  <code>public/videos/Intro_video.mp4</code>
                  <p className="landing-video-fallback-hint">
                    (or <code>intro_video.mp4</code>)
                  </p>
                </div>
              ) : (
                <>
                  <video
                    key={activeSrc}
                    ref={introVideoRef}
                    className="landing-hero-video"
                    src={activeSrc}
                    muted
                    loop
                    playsInline
                    preload="auto"
                    autoPlay
                    aria-label="Intro"
                    onError={onVideoError}
                  />
                  {import.meta.env.DEV &&
                    activeSrc === DEMO_MP4 &&
                    !loadFailed && (
                      <p className="landing-video-demo-tag">
                        Dev: sample clip — add Intro_video.mp4 to public/videos
                      </p>
                    )}
                </>
              )}
            </div>
          </div>

          <div className="landing-info">
            <div className="landing-role-stack">
              <h2 className="landing-info-h2">
                <span className="landing-h2-1">Machine Learning Engineer</span>
                <span className="landing-h2-2">Developer</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
