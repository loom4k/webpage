import Highlight from "@components/Highlight";
import { STACK } from "@root/libs/config/stack";
import { motion } from "framer-motion";
import { FC } from "react";

export const Stack: FC = () => {
	return (
		<div>
			<div className="flex flex-col text-white px-60">
				<h1 className="flex flex-col mx-auto text-3xl tracking-tightest">
					Technologies I use &amp; support
				</h1>
				<p className="flex flex-col text-center mt-4">
					I highly leverage new bleeding-edge technologies and
					languages like Typescript to stay on top of the game. You
					can find a list of my most-used technologies below. I use
					these technologies to build my own projects and to support
					my work.
				</p>
			</div>
			<div
				className="w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-5 gap-4 mt-32 md:mt-8
                    px-8 sm:px-20 md:px-24 2xl:px-56"
			>
				{STACK.map((lang, key) => (
					<StackCard
						name={lang.name}
						logo={lang.logo}
						lang={lang}
						key={key}
					/>
				))}
			</div>
			<div className="w-full"></div>
		</div>
	);
};

interface IStackCard {
	name: string;
	logo: string;
	lang: any;
}

const StackCard = ({ name, logo, lang }: IStackCard) => {
	return (
		<motion.div
			className={`bg-epic-black-light ${
				lang.hoverColor
			} flex flex-col rounded-md h-40 ${
				lang.name == "Github" ? "hover:cursor-pointer" : null
			}`}
			whileHover={{ y: -5 }}
			onClick={() => {
				window.location.href = lang.href;
			}}
		>
			<img
				src={`./assets/langs/${logo}`}
				className="w-20 h-20 mx-auto mt-6 rounded-md"
			></img>
			<p className="mx-auto my-auto text-white">{name}</p>
		</motion.div>
	);
};

export default Stack;
