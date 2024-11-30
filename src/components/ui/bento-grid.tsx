import { cn } from "@/utils/cn";
import Image from "next/image";
import { IconApps, IconAppWindow, IconBrandFigma } from "@tabler/icons-react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[32rem] grid-cols-1 md:grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export async function BentoGridItem({
  className,
  id,
  title,
  description,
  imageUrl,
  type,
}: {
  className?: string;
  id: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  imageUrl?: string;
  type?: "Design System" | "Project" | "Site";
}) {
  const icon = {
    "Design System": <IconBrandFigma className="h-4 w-4 text-neutral-500" />,
    Project: <IconApps className="h-4 w-4 text-neutral-500" />,
    Site: <IconAppWindow className="h-4 w-4 text-neutral-500" />,
  };

  return (
    <div
      className={cn(
        "row-span-1 flex flex-col space-y-4 rounded-lg group/bento dark:shadow-none p-4 pb-8 border dark:border-white/[0.2] border-black dark:bg-black hover:shadow-xl transition duration-200",
        className
      )}
    >
      <div className="h-full">
        <div className="flex w-full h-[360px] mb-4 rounded-md overflow-clip">
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
    </div>
  );
}
