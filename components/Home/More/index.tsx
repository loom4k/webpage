import Highlight from "@components/Highlight";
import useMediaQuery from "@utils/useMediaQuery";
import { motion } from "framer-motion";
import { FC } from "react";

export const More: FC = () => {
	return (
		<div className="w-full flex flex-col md:flex-row text-center md:text-right mt-8">
			<div className="w-1/5 lg:w-1/2 px-8 sm:px-20 md:px-24 md:pt-28 2xl:pl-56 flex flex-row relative">
				{!useMediaQuery(1024) && (
					<>
						<motion.img
							src={"./assets/doggo.png"}
							className="w-80 rounded-lg my-auto mt-16 absolute bottom-0"
							whileHover={{ scale: 1.25 }}
						/>
						<img
							src={"./assets/cute_af_doggo.png"}
							className="w-20 h-20 rounded-lg -mt-8 ml-4 absolute left-[400px] 2xl:left-[530px] top-20"
						/>
					</>
				)}
				{!useMediaQuery(1200) && (
					<motion.img
						src={"./assets/trips/ottawa.png"}
						className="w-72 h-56 mt-[180px] rounded-lg -ml-20 absolute -bottom-8 right-8 shadow-lg shadow-pastel-black"
						whileHover={{ scale: 1.5 }}
					/>
				)}
			</div>
			<div
				className="flex flex-col 
				w-full md:w-2/3 lg:w-3/5 custom-md:w-1/2
				px-8 sm:px-20 md:px-24 2xl:pr-56 pt-28
				text-white"
			>
				<h1 className="text-6xl tracking-[-5px] font-bold">
					Not in front of my <Highlight>IDE</Highlight>?
				</h1>
				<p className="mt-4">
					You will most likely find me playing{" "}
					<Highlight>Digital Combat Simulator</Highlight>, petting
					my dog, or reading a <Highlight>Wikipedia</Highlight> article.<br />
					<br />I also play tennis and videogames with my
					friends. I am a <Highlight>ski instructor</Highlight> as
					well, I can't wait for <Highlight>winter</Highlight> to
					start so I can restart skiing!
				</p>
				{useMediaQuery(767) && (
					<div className="flex flex-row relative">
						<img
							src={"./assets/doggo.png"}
							className="w-72 mt-16 rounded-lg mx-auto shadow-lg shadow-pastel-black flex flex-row"
						/>
						<img
							src={"./assets/cute_af_doggo.png"}
							className="w-20 h-20 mt-16 rounded-lg mx-auto flex flex-row absolute right-6"
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default More;
