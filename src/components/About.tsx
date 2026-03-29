import { useRef } from "react";
import "./styles/About.css";
import { publicUrl } from "../utils/publicUrl";
import { useVideoPlayInSection } from "../hooks/useVideoPlayInSection";

const ABOUT_VIDEO = publicUrl("videos/Aboutme_video.mp4");

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const aboutVideoRef = useRef<HTMLVideoElement>(null);

  useVideoPlayInSection(aboutVideoRef, sectionRef);

  return (
    <div className="about-section" id="about" ref={sectionRef}>
      <div className="about-layout">
        <div className="about-media">
          <div className="about-me-video-wrap">
            <video
              ref={aboutVideoRef}
              className="about-hero-video"
              src={ABOUT_VIDEO}
              muted
              loop
              playsInline
              preload="auto"
              autoPlay
              aria-label="About intro clip"
            />
          </div>
        </div>
        <div className="about-me">
          <h3 className="title about-title-spaced">A B O U T&nbsp;&nbsp;M E</h3>
          <p className="para">
            I&apos;m a Machine Learning Engineer and Researcher dedicated to
            building AI that doesn&apos;t just stay in a notebook, but thrives in
            production. Whether I&apos;m optimizing complex LLM architectures for
            massive efficiency gains or exploring the frontiers of multilingual
            safety, I bridge the gap between deep research and high-performance,
            scalable systems.
          </p>
          <p className="para">
            Driven by curiosity, I am constantly exploring the &ldquo;what&apos;s
            next&rdquo; of technology—experimenting with new frameworks and
            refining my craft to turn cutting-edge theories into reliable,
            real-world tools. I don&apos;t just build models; I build the systems
            that make them useful.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
