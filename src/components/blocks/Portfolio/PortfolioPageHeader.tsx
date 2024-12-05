import github from "/public/icons/github-icon.png";
import Button from "../../atoms/Button";

interface PortfolioPageHeaderInterface {
  title: string;
  body?: string;
  githubLink?: string;
}

export default function PortfolioPageHeader({
  title,
  body,
  githubLink,
}: PortfolioPageHeaderInterface) {
  return (
    <div className="w-full dark:bg-black pb-32">
      <h1 className="font-title type-preset-2 mb-10">{title}</h1>

      {body && <p className="font-body type-preset-base max-w-2xl">{body}</p>}

      {githubLink && (
        <div className="w-max flex flex-col gap-2 font-title type-preset-4">
          <span>The Code...</span>
          {/* <Button link={githubLink} text="GitHub" icon={github} type="social" /> */}
        </div>
      )}
    </div>
  );
}
