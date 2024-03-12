import Image, { StaticImageData } from "next/image";
import { PinContainer } from "../../ui/3d-pin";

export default function PortfolioItem({
  id,
  title,
  description,
  link,
  image,
  type,
}: {
  id: number;
  title: string;
  description: string;
  link: string;
  image: StaticImageData;
  type: string;
}) {
  return (
    <div
      key={`ProjectItem-${id}`}
      className="w-full h-[26rem] font-body type-preset-base"
    >
      <PinContainer title={title} href={link}>
        <div className="flex flex-col p-4 tracking-tight text-slate-100/50">
          <h4 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100 dark:text-slate-900 font-body type-preset-lg">
            {title}
          </h4>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-300 dark:text-slate-500 font-body type-preset-base">
              {description}
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg overflow-clip aspect-video">
            <Image src={image} alt={`${title} screenshot`} />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
