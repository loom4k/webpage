import type { NextPage } from "next";

import { Nullable } from "@utils/common";
import Header from "@components/Layout/Header";
import Hero from "@components/Home/Hero";
import About from "@components/Home/About";
import Footer from "@components/Layout/Footer";
import Stack from "@components/Home/Stack";

interface PageProps {
	lang: string;
	fullIntro: Nullable<String>;
}

const Home: NextPage<PageProps> = ({ lang }) => {
	return (
		<div className="relative">
			<Header />
			<Hero />
			<About />
			<Stack />
			<Footer />
		</div>
	);
};

export default Home;
