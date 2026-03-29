import { useEffect } from "react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import HoverLinks from "./HoverLinks";
import { smoother } from "./utils/scrollSmooth";
import "./styles/Navbar.css";

const Navbar = () => {
  useEffect(() => {
    const onResize = () => {
      ScrollSmoother.refresh(true);
    };
    window.addEventListener("resize", onResize);

    const links = document.querySelectorAll(".header ul a");
    const onLinkClick = (e: Event) => {
      if (window.innerWidth > 1024) {
        e.preventDefault();
        const elem = e.currentTarget as HTMLAnchorElement;
        const section = elem.getAttribute("data-href");
        smoother?.scrollTo(section, true, "top top");
      }
    };
    links.forEach((elem) => elem.addEventListener("click", onLinkClick));

    return () => {
      window.removeEventListener("resize", onResize);
      links.forEach((elem) => elem.removeEventListener("click", onLinkClick));
    };
  }, []);

  return (
    <>
      <div className="header">
        <a
          href={`${import.meta.env.BASE_URL}#`}
          className="navbar-title"
          data-cursor="disable"
        >
          NM
        </a>
        <a
          href="mailto:namratha.murarikar20@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          namratha.murarikar20@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
