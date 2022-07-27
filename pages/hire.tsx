import { NextPage } from "next";

import { PageProps } from "@interfaces/PageProps";
import Header from "@components/Layout/Header";
import Hero from "@components/Hire/Hero";
import Footer from "@components/Layout/Footer";

const Hire: NextPage<PageProps> = () => {
	return (
		<div className="relative">
			<Header />
			<Footer />
		</div>
	);
};

export default Hire;
