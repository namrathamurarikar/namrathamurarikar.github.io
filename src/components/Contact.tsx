import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:namratha.murarikar20@gmail.com" data-cursor="disable">
                namratha.murarikar20@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+17138856294" data-cursor="disable">
                +1 (713) 885-6294
              </a>
            </p>
            <h4>Location</h4>
            <p>Seattle, WA</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/namrathamurarikar"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/namrathamurarikar2412"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://www.credly.com/badges/a26c20a5-f0c0-430d-8bb6-63b3e0afdb59/linked_in_profile"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              AWS Cloud Practitioner · Credly <MdArrowOutward />
            </a>
            <a
              href="https://www.credly.com/badges/b3678c40-ebd2-49cc-8696-62dce162f334/linked_in_profile"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              AWS ML Engineer · Credly <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Namratha Murarikar</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
