import { PageHeroInterface } from "@/types/blocks/PageHeroInterface";
import { HeroParallax } from "../../ui/hero-parallax";
import { BackgroundBeamsWithCollision } from "../../ui/background-beams-with-collision";
import Button from "../../atoms/Button";

function PageHero(props: PageHeroInterface) {
  if (props.type === "Default") {
    return (
      <section className="overflow-clip w-full z-0 pb-40">
        <BackgroundBeamsWithCollision>
          <div className="md:max-w-screen-xl relative mx-auto mt-[12vh] md:mt-[20vh] px-8 w-full">
            <h1 className="font-title heading-1 pt-[19.38px]">
              {props.mainText}
            </h1>
            <p className="font-body body-lg max-w-2xl mt-4">
              {props.afterText}
            </p>

            <div className="relative z-10 flex gap-4 mt-8 w-fit">
              {props.buttonText && props.buttonLink && (
                <Button text={props.buttonText} href={props.buttonLink} />
              )}
            </div>
          </div>
        </BackgroundBeamsWithCollision>
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
      <section className="w-full z-0 pb-32">
        <HeroParallax {...props}></HeroParallax>
      </section>
    );
  }
}

export default PageHero;
