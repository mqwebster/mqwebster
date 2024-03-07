import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const navItems = [
    { link: "#home", text: "Home" },
    { link: "#about", text: "About" },
    { link: "#resume", text: "Resume" },
    { link: "#portfolio", text: "Portfolio" },
    { link: "#contact", text: "Contact" },
  ];
  return (
    <nav
      id="navbar"
      className="max-h-[112px] px-16 py-4 bg-blue-base sticky top-0 z-50"
    >
      <div className="mx-auto flex flex-row justify-between items-center max-w-screen-xl">
        <Image
          src="/MarquesWebster.png"
          alt="Marques Webster"
          width={72}
          height={72}
        />

        <ul className="flex flex-row gap-4 text-white">
          {navItems.map((item) => {
            return (
              <li key={item.text}>
                <Link href={item.link}>{item.text}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
