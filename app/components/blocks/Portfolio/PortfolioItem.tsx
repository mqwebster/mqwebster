import Image, { StaticImageData } from "next/image";
import { PinContainer } from "../../ui/3d-pin";

export default function PortfolioItem({
  title,
  description,
  link,
  newWindow,
  image,
}: {
  title: string;
  description: string;
  link: string;
  newWindow?: boolean;
  image: StaticImageData;
}) {
  return (
    <div className="w-full h-[32rem] font-body type-preset-base">
      <PinContainer
        title={title}
        href={link}
        newWindow={newWindow}
        className="h-full"
      >
        <div className="flex flex-col justify-between p-4 tracking-tight text-slate-100/50 h-full">
          <div>
            <h4 className="font-bold font-body type-preset-base text-slate-100 dark:text-slate-900 mb-2">
              {title}
            </h4>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-300 dark:text-slate-500 font-body type-preset-base">
                {description}
              </span>
            </div>
          </div>
          <div className="w-full relative flex rounded-lg mt-4 overflow-clip">
            <Image
              src={image}
              alt={`${title} screenshot`}
              width={1440}
              height={1080}
              className="object-cover object-top aspect-video"
            />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
