import type { ContentfulResponse } from "@/types/types";
import type { HomePage } from "@/types/gen/TypeHomepage";

const HOMEPAGE_GRAPHQL_FIELDS = `
  sys {
    id
  }
  heading,
  heroBanner {
    sys {
      id
    }
    url
    title
  }
  duplexSection {
    json
  }
  videoEmbed {
    sys {
      id
    }
    url
    title
  }
`;

async function fetchGraphQL(query: string, preview: boolean = false): Promise<ContentfulResponse> {
  const response = await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${
        preview ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.CONTENTFUL_ACCESS_TOKEN
      }`,
    },
    body: JSON.stringify({ query }),
    next: { tags: ["homepage"] },
  });

  return response.json();
}

export async function getHomePage(isDraftMode: boolean = false): Promise<HomePage | null> {
  const response = await fetchGraphQL(
    `query {
      homepageCollection(limit: 1, preview: ${isDraftMode ? "true" : "false"}) {
        items {
          ${HOMEPAGE_GRAPHQL_FIELDS}
        }
      }
    }`,
    isDraftMode
  );

  return response?.data?.homepageCollection?.items[0] ?? null;
}
