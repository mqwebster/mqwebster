import IMAGE_FIELDS from "./IMAGE_FIELDS";
import PROJECT_GRID from "./content_blocks/PROJECT_GRID";
import PAGE_HERO from "./content_blocks/PAGE_HERO";
import SECTION_HEADER from "./content_blocks/SECTION_HEADER";

const PAGE_FIELDS = `
sys {
  id
}
title
slug
description
image {
  ${IMAGE_FIELDS}
}
pageHero {
  ${PAGE_HERO}
}
pageContentCollection(limit: 20) {
  items {
    __typename
    ... on ProjectGrid {
      ${PROJECT_GRID}
    }
    ... on SectionHeader {
      ${SECTION_HEADER}
    }
  }
}
`;

export default PAGE_FIELDS;
