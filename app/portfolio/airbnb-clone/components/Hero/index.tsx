import Image from "next/image";
import photoGrid from "../../images/photo-grid.png";
import "./index.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-wrap">
        <div className="hero-img">
          <Image
            src={photoGrid}
            className="hero-img__grid"
            alt="Experiences Photo Grid"
          />
        </div>
        <div className="hero-content">
          <h1>Online Experiences</h1>
          <p>
            Join unique interactive activities led by one-of-a-kind hosts - all
            without leaving home.
          </p>
        </div>
      </div>
    </div>
  );
}
