import { PageHeroInterface } from "@/types/blocks/PageHeroInterface";
import { HeroParallax } from "../../ui/hero-parallax";

function PageHero(props: PageHeroInterface) {
  if (props.type === "Default") {
    return (
      <section className="overflow-clip w-full z-0 pb-40">
        <HeroParallax {...props}></HeroParallax>
      </section>
    );
  }

  if (props.type === "Macbook Scroll") {
    return (
      <section className="overflow-clip w-full z-0 pb-40">
        <HeroParallax {...props}></HeroParallax>
      </section>
    );
  }

  if (props.type === "Projects List") {
    return (
      <section className="w-full z-0 pb-40">
        <HeroParallax {...props}></HeroParallax>
      </section>
    );
  }
}

export default PageHero;
