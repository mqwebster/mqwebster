import PROJECT_CARD from "../cards/PROJECT_CARD";

const PROJECT_GRID = `
sys {
  id
}
projectListCollection(limit: 12) {
  items {
    __typename
    ... on ProjectCard {
      ${PROJECT_CARD}
    }
  }
}
`;

export default PROJECT_GRID;
