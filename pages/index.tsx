import type { NextPage } from "next";
import { useState } from "react";

import { Nullable } from "@utils/common";
import Header from "@components/Header";
import Hero from "@components/Home/Hero";
import About from "@components/Home/About";

interface PageProps {
	lang: string;
	fullIntro: Nullable<String>;
}

const Home: NextPage<PageProps> = ({ lang, fullIntro }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [introVisible, setIntroVisible] = useState(false);

	return (
		<div className="relative">
			<Header />
			<Hero />
			<About />
			<div className="h-[1000px]"></div>
		</div>
	);
};

export default Home;
