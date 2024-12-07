// Have to run a separate API on Project Cards
// Issue where site crashes when `image` field is added to `src/lib/graphql/cards/projectCard.graphql` fragment
async function getImage(id) {
  const contentful = require("contentful");
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    environment: "master", // defaults to 'master' if not set
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  const data = await client.getEntry(id).then((entry) => {
    return entry;
  });
  const imageUrl = data.fields.image.fields.file.url;

  return imageUrl;
}

export default getImage;
