import Image from "next/image";
import starRating from "../../images/star.png";
import "./index.css";

import image1 from "../../images/katie-zaferes.png";
import image2 from "../../images/wedding-photography.png";
import image3 from "../../images/mountain-bike.png";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  const images = {
    "katie-zaferes": image1,
    "wedding-photography": image2,
    "mountain-bike": image3,
  };

  return (
    <div className="card">
      <div className="card-wrap">
        {badgeText && <div className="card-badge">{badgeText}</div>}

        <div className="card-img">
          <Image
            src={images[props.coverImg]}
            width={176}
            height={240}
            className="card-img__inner"
            alt=""
          />
        </div>

        <div className="card-content">
          <div className="card-rating">
            <div className="card-rating__img">
              <Image
                src={starRating}
                className="card-rating__img-inner"
                alt=""
              />
            </div>

            <div className="card-rating__content">
              <span>{props.stats.rating}</span> ({props.stats.reviewCount})
              &#x2022; {props.location}
            </div>
          </div>

          <div className="card-title">
            <h2>{props.title}</h2>
          </div>

          <div className="card-price">
            <span>From ${props.price}</span> / person
          </div>
        </div>
      </div>
    </div>
  );
}
