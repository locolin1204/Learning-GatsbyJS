import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";

const AboutPage = () => {
	return (
		<Layout pageTitle="About Me">
			<p>
				Hi there! I'm the proud creator of this site, which I built with Gatsby.
			</p>
			<StaticImage
				alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
				src="../images/clifford.jpg"
			/>
		</Layout>
	);
};

export default AboutPage;
