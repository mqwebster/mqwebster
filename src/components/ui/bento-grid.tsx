import { cn } from "@/utils/cn";
import Image from "next/image";
import { IconApps, IconAppWindow, IconBrandFigma } from "@tabler/icons-react";
import Link from "next/link";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-3 gap-4", className)}>
      {children}
    </div>
  );
};

export async function BentoGridItem({
  className,
  id,
  title,
  description,
  link,
  imageUrl,
  type,
}: {
  className?: string;
  id: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  link?: string;
  imageUrl?: string;
  type?: "Design System" | "Project" | "Site";
}) {
  const icon = {
    "Design System": (
      <div className="group/designSysIcon flex items-center gap-2 lg:gap-1 w-fit cursor-default text-neutral-500">
        <IconBrandFigma className="h-4 w-4" />

        <span className="body-sm lg:opacity-0 group-hover/designSysIcon:opacity-100 -translate-x-1 group-hover/designSysIcon:translate-x-0 transition-transform duration-200">
          Design System
        </span>
      </div>
    ),
    Project: (
      <div className="group/designSysIcon flex items-center gap-2 lg:gap-1 w-fit cursor-default text-neutral-500">
        <IconApps className="h-4 w-4" />

        <span className="body-sm lg:opacity-0 group-hover/designSysIcon:opacity-100 -translate-x-1 group-hover/designSysIcon:translate-x-0 transition-transform duration-200">
          Project
        </span>
      </div>
    ),
    Site: (
      <div className="group/designSysIcon flex items-center gap-2 lg:gap-1 w-fit cursor-default text-neutral-500">
        <IconAppWindow className="h-4 w-4" />

        <span className="body-sm lg:opacity-0 group-hover/designSysIcon:opacity-100 -translate-x-1 group-hover/designSysIcon:translate-x-0 transition-transform duration-200">
          Site
        </span>
      </div>
    ),
  };

  return (
    <div
      className={cn(
        "row-span-1 space-y-4 rounded-lg group/bento dark:shadow-none border dark:border-white/[0.2] border-black dark:bg-black hover:shadow-xl transition duration-200",
        className
      )}
    >
      <Link
        href={link ?? ""}
        className={
          !link || link === "" ? "pointer-events-none" : "pointer-events-auto"
        }
        aria-disabled={!link || link === ""}
        tabIndex={!link || link === "" ? -1 : 0}
        target={
          link.startsWith("/") || link.includes("mqwebster.com") ? "" : "_blank"
        }
      >
        <div className="p-4 pb-8">
          <div className="flex w-full aspect-square md:aspect-auto sm:h-[160px] md:h-[200px] lg:h-[360px] mb-4 rounded-md overflow-clip">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt=""
                quality={60}
                width={1920}
                height={1080}
                className="object-cover object-left-top"
              />
            ) : (
              <div className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.5] bg-dot-black/[0.5] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border-2 border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
            )}
          </div>
          <div className="group-hover/bento:translate-x-2 transition duration-200">
            {icon[type]}
            <div className="body-base font-body font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
              {title}
            </div>
            <div className="body-sm font-body text-neutral-600 dark:text-neutral-300">
              {description}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
