import PROJECT_IMAGE from "../hero/PROJECT_IMAGE";

const PAGE_HERO = `
sys {
  id
}
type
beforeText
mainText
afterText
buttonText
buttonLink
secondaryButtonText
secondaryButtonLink
projectImageListCollection {
  __typename
  ... on ProjectImage {
    ${PROJECT_IMAGE}
  }
}
`;

export default PAGE_HERO;
