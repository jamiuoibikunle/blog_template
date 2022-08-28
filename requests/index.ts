import { gql, request } from "graphql-request";

export const getPosts = async () => {
    const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
    const query = gql`
        query MyQuery {
            posts {
                excerpt
                content {
                    html
                }
                coverImage {
                    fileName
                    url
                    updatedAt
                }
                slug
                title
                featured
                updatedAt
            }
        }
    `;

    const result = await request(graphqlAPI as string, query);
    return result;
};

export const getSinglePost = async (slug: string) => {
    const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
    const query = gql`
        query singlePost($slug: String!) {
            post(where: { slug: $slug }) {
                author {
                    biography
                    name
                    picture {
                        url
                    }
                }
                content {
                    html
                }
                coverImage {
                    url
                }
                slug
                title
                updatedAt
            }
        }
    `;

    const result = await request(graphqlAPI as string, query, { slug });
    return result;
};
