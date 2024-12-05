"use client";
import Link from "next/link";
import ButtonInterface from "@/types/atoms/ButtonInterface";
import { cn } from "@/utils/cn";

export default function Button({
  text,
  href,
  newTab = true,
  className,
}: ButtonInterface) {
  newTab =
    href.startsWith("/") || href.includes("mqwebster.com/") ? false : true;

  return (
    <button
      className={cn(
        "rounded-lg border border-black bg-transparent text-white dark:border-white relative group transition duration-200",
        className
      )}
    >
      <Link
        href={href}
        target={newTab ? "_blank" : "_self"}
        rel={newTab ? "noopener noreferrer" : ""}
      >
        <div className="px-10 py-3">
          <div className="rounded-lg absolute -bottom-2 right-2 bg-blue-base group-hover:bg-blue-dark h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
          <span className="relative">{text}</span>
        </div>
      </Link>
    </button>
  );
}
