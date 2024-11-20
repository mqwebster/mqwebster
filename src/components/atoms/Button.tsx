"use client";
import Link from "next/link";
import ButtonInterface from "@/types/atoms/ButtonInterface";

export default function Button({
  text,
  href,
  newTab = true,
  icon,
}: ButtonInterface) {
  return (
    <button className="rounded-lg px-10 py-3 border border-black bg-transparent text-white dark:border-white relative group transition duration-200">
      <Link
        href={href}
        target={newTab ? "_blank" : "_self"}
        rel={newTab ? "noopener noreferrer" : ""}
      >
        <div className="rounded-lg absolute -bottom-2 right-2 bg-blue-base group-hover:bg-blue-dark h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
        <span className="relative">{text}</span>
      </Link>
    </button>
  );
}
