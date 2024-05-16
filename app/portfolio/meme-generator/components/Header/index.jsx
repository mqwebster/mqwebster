import Image from "next/image";
import logo from "../../troll-face.png";
import "./index.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header-wrap">
        <div className="header-logo">
          <div className="header-logo__inner">
            <Image
              src={logo}
              width={100}
              height={100}
              className="header-logo__img"
              alt="Troll Face"
            />
          </div>
          <span>Meme Generator</span>
        </div>

        <span>React Course - Project 3</span>
      </div>
    </div>
  );
}
