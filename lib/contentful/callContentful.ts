/** 
The callContentful function is a helper function that allows the application to connect to the Contentful API and fetch data. 

The function accepts three arguments:
  query: A string representing the GraphQL query that will be sent to the Contentful API. 
    This query is used to specify which data to retrieve from the API.
  variables: An optional object containing variables that will be passed to the GraphQL query. 
    These variables can be used to customize the data that is retrieved from the API.
  options: An optional object containing options that can be used to configure the behavior of the function. 
    The defaultOptions object defines the default values for these options, and the preview option can be used to specify whether the function should retrieve preview data from the API instead of published data.


The function uses the fetch API to send a HTTP POST request to the Contentful API with the provided query and variables. 
If the request is successful, the response data is returned as a JavaScript object. Otherwise, an error is thrown. 
The function also uses environment variables to retrieve the necessary authentication information and the ID of the Contentful space to query.

*/

export const defaultOptions = {
  preview: false,
};

export default async function callContentful(
  query,
  variables = {},
  options = defaultOptions
) {
  const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

  const accessToken = options.preview
    ? process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN
    : process.env.CONTENTFUL_ACCESS_TOKEN;

  const fetchOptions = {
    method: "POST",
    headers: {
      Authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  };

  try {
    const data = await fetch(fetchUrl, fetchOptions).then((response) =>
      response.json()
    );
    return data;
  } catch (error) {
    throw new Error("Could not fetch data from Contentful!");
  }
}
