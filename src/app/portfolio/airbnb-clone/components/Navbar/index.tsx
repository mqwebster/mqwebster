import Image from "next/image";
import logo from "../../images/airbnb-lockup-logo.png";
import "./index.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-wrap">
        <Image src={logo} className="navbar-logo" alt="Airbnb Logo" />
      </div>
    </div>
  );
}
