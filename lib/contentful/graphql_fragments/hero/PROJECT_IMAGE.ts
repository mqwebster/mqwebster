import IMAGE_FIELDS from "../IMAGE_FIELDS";

const PROJECT_IMAGE = `
sys {
  id
}
title
link
image {
  ${IMAGE_FIELDS}
}
newTab
`;

export default PROJECT_IMAGE;
