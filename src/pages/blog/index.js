import * as React from "react";
import Layout from "../../components/layout";
import { Link, graphql } from "gatsby";
import { articleLink, date, article } from "./index.module.css";

const BlogPage = ({ data }) => {
	return (
		<Layout pageTitle="My Blog Posts">
			{data.allMdx.nodes.map(node => (
				<article className={article} key={node.id}>
					<h2>
						<Link className={articleLink} to={`/blog/${node.slug}`}>
							{node.frontmatter.title}
						</Link>
					</h2>
					<p>
						Posted: <span className={date}>{node.frontmatter.date}</span>
					</p>
				</article>
			))}
		</Layout>
	);
};

export const query = graphql`
	query {
		allMdx(sort: { fields: frontmatter___date, order: DESC }) {
			nodes {
				frontmatter {
					date(formatString: "MMMM D, YYYY")
					title
				}
				id
				slug
			}
		}
	}
`;

export default BlogPage;
