import Colors from "./Colors";

export interface SectionHeaderInterface {
  id: string;
  title?: string;
  body: any;
  buttonText?: string;
  buttonLink?: string;
  color: Colors;
}
