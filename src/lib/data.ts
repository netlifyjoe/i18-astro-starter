const GRAPHQL_URI =
  import.meta.env?.GRAPHQL_URI || `http://localhost:7070/__graphql`;

const headers = import.meta.env?.AUTH_TOKEN
  ? { Authorization: `Bearer ${import.meta.env.AUTH_TOKEN}` }
  : {};

interface GraphQLResponse<TData> {
  data: TData;
  errors?: Array<{ message: string }>;
}

export const doQuery = async <TData = Record<string, any>>(
  query: string,
  variables: Record<string, any> = {}
): Promise<GraphQLResponse<TData>> => {
  try {
    const response = await fetch(GRAPHQL_URI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const json: GraphQLResponse<TData> = await response.json();

    if (json.errors) {
      console.error("GraphQL Error", ...json.errors, query);
      throw new Error(json.errors.map(e => e.message).join(", "));
    }

    // Convert undefineds to nulls because Next.js is not able to serialize undefineds
    return JSON.parse(JSON.stringify(json));
  } catch (error) {
    console.error("fetch GraphQL threw an error:", error, query);
    throw error;
  }
};

export async function getLandingPage(slug) {
  const query = /* graphql */ `
  {
    contentfulLandingPage(slug: { eq: "${slug}" }) {
      id
      slug
      title
      contentful_id
      contentSections {
        __typename
        ... on ContentfulHero {
          id
          contentful_id
          title
          subtitle
          buttonLabel
          backgroundColor,
          ctaSlug
          image {
            url
            title
          }
        }
      }
    }
  }  
`;

  const result = await doQuery(query);

  const landingPage = result?.data?.contentfulLandingPage;

  return landingPage;
}

export async function getPost(id) {
  const postQuery = `
  query post($id: String) {
    contentfulPost(id: { eq: $id }) {
        id
        contentful_id
        title
        excerpt {
          excerpt
        }
        blogCategory {
          id
          contentful_id
          name
        }
        image {
          url
          title
        }
        contentRichText {
          raw
          references {
            ... on ContentfulAsset {
              id
              __typename
              contentful_id
              title
              url
              description
            }
          }
        }
    }
  }
`;

  const result = await doQuery(postQuery, { id });

  return result?.data?.contentfulPost;
}
