import { cn } from "@/utils/cn";
import Image from "next/image";

import { ContentfulImageInterface } from "@/types/ContentfulImageInterface";
import getImage from "@/src/lib/contentful/getImage";

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
  icon,
}: {
  className?: string;
  id?: ContentfulImageInterface;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  icon?: React.ReactNode;
}) {
  const imageUrl = await getImage(id);
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
              src={`https:${imageUrl}`}
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
          {icon}
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
            {title}
          </div>
          <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}
