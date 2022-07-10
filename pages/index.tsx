import type { NextPage } from "next";

import { PageProps } from "@interfaces/PageProps";
import Header from "@components/Layout/Header";
import Hero from "@components/Home/Hero";
import About from "@components/Home/About";
import Footer from "@components/Layout/Footer";

const Home: NextPage<PageProps> = ({ lang }) => {
	return (
		<div className="relative">
			<Header />
			<Hero />
			<About />
			<Footer />
		</div>
	);
};

export default Home;
