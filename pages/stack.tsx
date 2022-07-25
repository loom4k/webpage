import { NextPage } from "next";

import { PageProps } from "@interfaces/PageProps";
import Header from "@components/Layout/Header";
import Footer from "@components/Layout/Footer";
import StackComponent from "@components/Stack";

const Stack: NextPage<PageProps> = ({ lang }) => {
	return (
		<div className="relative">
			<Header />
			<StackComponent />
			<Footer />
		</div>
	);
};

export default Stack;
