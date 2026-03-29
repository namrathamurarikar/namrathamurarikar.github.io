import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  /** Opens in a new tab (video file or external site) */
  link: string;
}

const WorkImage = ({ image, alt, link }: Props) => {
  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="disable"
      >
        <div className="work-link">
          <MdArrowOutward />
        </div>
        <img src={image} alt={alt ?? ""} />
      </a>
    </div>
  );
};

export default WorkImage;
