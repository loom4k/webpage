import { FC } from "react";
import { HiOutlineHeart } from "react-icons/hi";
import { AiFillGithub, AiFillMail, AiOutlineTwitter } from "react-icons/ai";
import { motion } from "framer-motion";

import Highlight from "@components/Highlight";

export const Footer: FC = () => {
	return (
		<div className="bg-epic-black w-full h-24 mt-24 flex flex-row text-white">
			<div className="flex flex-row h-full w-full">
                <p className="mx-auto my-auto text-2xl flex flex-row">
                    <motion.div onClick={() => { window.location.href = 'https://github.com/loom4k' }} whileHover={{y: -5}} className="transition-colors ease-in-out hover:text-pastel-green"><AiFillGithub className="flex flex-row mr-6 hover:cursor-pointer"/></motion.div>
                    <motion.div onClick={() => { window.location.href = 'mailto:contact@loom4k.me' }} whileHover={{y: -5}} className="transition-colors ease-in-out hover:text-pastel-green"><AiFillMail className="flex flex-row hover:cursor-pointer"/></motion.div>
                    <motion.div onClick={() => { window.location.href = 'https://twitter.com/loom4kdoescode' }} whileHover={{y: -5}} className="transition-colors ease-in-out hover:text-pastel-green"><AiOutlineTwitter className="flex flex-row ml-6 hover:cursor-pointer"/></motion.div>
                </p>
            </div>
		</div>
	);
};

export default Footer;
