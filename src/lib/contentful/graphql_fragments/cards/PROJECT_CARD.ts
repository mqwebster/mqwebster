import IMAGE_FIELDS from "../IMAGE_FIELDS";

const PROJECT_CARD = `
sys {
  id
}
title
plainBody
image {
  ${IMAGE_FIELDS}
}
buttonText
buttonLink
`;

export default PROJECT_CARD;
