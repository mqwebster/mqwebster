import Image, { StaticImageData } from "next/image";
import projectIcon from "/public/icons/project-icon.png";

export default function PortfolioItem({
  id,
  title,
  description,
  link,
  image,
  type,
}: {
  id: number;
  title: string;
  description: string;
  link: string;
  image: StaticImageData;
  type: string;
}) {
  return (
    <div key={id} className="">
      <div className="">
        <Image src={image} alt="" />
      </div>
      <div className="">
        <h3>{title}</h3>
        <p>{description}</p>
        <button>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <div>
              <span className="">
                See {type[0].toUpperCase() + type.slice(1)}
              </span>
              <div className="">
                <Image src={projectIcon} alt="Project Icon" />
              </div>
            </div>
          </a>
        </button>
      </div>
    </div>
  );
}
