import { ContentfulImageInterface } from "../ContentfulImageInterface";

export default interface ButtonInterface {
  text: string;
  href: string;
  icon?: ContentfulImageInterface;
  newTab?: boolean;
  open?: boolean;
}
