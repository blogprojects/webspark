import { GraphQLClient, gql } from 'graphql-request';

export const load = async () => {
	const endpoint = import.meta.env.VITE_HYGRAPH_API;
	const hygraph = new GraphQLClient(endpoint, {
		headers: {}
	});

	const queryOne = gql`
		query GetAllPosts {
			posts(first: 1000, orderBy: updatedAt_DESC) {
				title
				slug
				business
				content {
					html
				}
			}
		}
	`;

	const request = await hygraph.request(queryOne);

	return {
		props: { request }
	};
};
