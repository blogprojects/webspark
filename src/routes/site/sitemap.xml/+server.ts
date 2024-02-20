//@ts-nocheck
import { GraphQLClient, gql } from 'graphql-request';

export async function GET({ setHeaders }) {
	const endpoint = import.meta.env.VITE_HYGRAPH_API;
	const hygraph = new GraphQLClient(endpoint);

	const queryOne = gql`
		query GetAllPosts {
			posts(orderBy: updatedAt_DESC, first: 10000) {
				title
				slug
				business
				updatedAt
			}
		}
	`;

	const queryTwo = gql`
		query GetAllPosts {
			posts(orderBy: updatedAt_DESC, skip: 100, first: 10000) {
				title
				slug
				business
				updatedAt
			}
		}
	`;

	const data = await hygraph.request(queryOne);
	const moreData = await hygraph.request(queryTwo);

	console.log(data);

	setHeaders({
		'Content-Type': 'application/xml'
	});

	const posts = data.posts;
	const morePosts = moreData.posts;
	const site = 'https://www.webspark.pro';

	const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
        <urlset
            xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
            xmlns:xhtml="https://www.w3.org/1999/xhtml"
            xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
            xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
            xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
        >
        <url>
            <loc>${site}</loc>
            <changefreq>daily</changefreq>
            <priority>0.7</priority>
        </url>
        ${posts
					.map(
						(post) =>
							`<url>
                <loc>${site}/${post.slug}</loc>
				<changefreq>weekly</changefreq>
				<lastmod>${new Date(post.updatedAt).toISOString().split('T')[0]}</lastmod>
				<priority>0.7</priority>
            </url>`
					)
					.join('')}
        ${morePosts
					.map(
						(post) =>
							`
                <url>
                    <loc>${site}/${post.slug}</loc>
                    <changefreq>weekly</changefreq>
                    <lastmod>${new Date(post.updatedAt).toISOString().split('T')[0]}</lastmod>
                    <priority>0.7</priority>
                </url>
                `
					)
					.join('')}
        </urlset>`;

	return new Response(sitemap);
}
