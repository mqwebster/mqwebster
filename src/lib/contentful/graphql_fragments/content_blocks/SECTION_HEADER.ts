import BODY_FIELDS from "../BODY_FIELDS";

const SECTION_HEADER = `
sys {
  id
}
title
body {
  ${BODY_FIELDS}
}
buttonText
buttonLink
color
`;

export default SECTION_HEADER;
