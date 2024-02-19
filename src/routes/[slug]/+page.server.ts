import { GraphQLClient, gql } from 'graphql-request';

export const load = async (context) => {
	const endpoint = import.meta.env.VITE_HYGRAPH_API;

	const hygraph = new GraphQLClient(endpoint, {
		headers: {}
	});

	const query = gql`
		query GetPost($slug: String!) {
			post(where: { slug: $slug }) {
				title
				slug
				content {
					html
				}
				business
				updatedAt
			}
		}
	`;

	const variables = {
		slug: context.params.slug
	};

	const post = await hygraph.request(query, variables);

	return {
		props: {
			post
		}
	};
};
