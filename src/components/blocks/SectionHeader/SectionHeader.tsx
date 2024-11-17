import { SectionHeaderInterface } from "@/types/blocks/SectionHeaderInterface";
import RichBodyContent from "../../atoms/RichBodyContent";

function SectionHeader({
  id,
  title,
  body,
  buttonText,
  buttonLink,
  color,
}: SectionHeaderInterface) {
  return (
    <section id="" className="w-full md:max-w-screen-xl z-0 px-8 py-8">
      <div className="flex flex-col pb-4">
        <div className="w-full dark:bg-black">
          <h2 className="font-title type-preset-2 mb-10">{title}</h2>
          <div className="max-w-4xl">
            <RichBodyContent body={body} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionHeader;
