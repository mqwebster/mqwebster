import { SectionHeaderInterface } from "@/types/blocks/SectionHeaderInterface";
import RichBodyContent from "../../atoms/RichBodyContent";

function SectionHeader({
  id,
  title,
  anchor,
  body,
  buttonText,
  buttonLink,
  color,
}: SectionHeaderInterface) {
  return (
    <section
      id={anchor ?? ""}
      className="w-full md:max-w-screen-xl z-0 px-8 pb-8 pt-16"
    >
      <div className="flex flex-col">
        <h2 className="font-title heading-2">{title}</h2>
        <div className="max-w-4xl">
          {body && <RichBodyContent body={body} />}
        </div>
      </div>
    </section>
  );
}

export default SectionHeader;
