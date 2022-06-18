import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

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
			<StaticImage
				alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
				src="../images/clifford.jpg"
			/>
			<StaticImage
				alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
				src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
			/>
		</Layout>
	);
};

export default AboutPage;
