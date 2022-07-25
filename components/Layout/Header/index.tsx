import { motion, useAnimation } from "framer-motion";
import { FC, useState } from "react";
import { HiMail } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";

import useMediaQuery from "@utils/useMediaQuery";
import Highlight from "@components/Highlight";
import { CONFIG } from "@root/libs/config";
import Tippy from "@tippyjs/react";

const variants = {
	hover: { y: -5 },
	initial: { y: 0 },
};

const links = [
	{
		name: "about",
		href: "#about",
		slash: "hash",
		open: true,
	},
	{
		name: "stack",
		href: "/stack",
		slash: "slash",
		open: true,
	},
	{
		name: "hire",
		href: "/hire",
		slash: "slash",
		open: false,
	},
	{
		name: "blog",
		href: "/blog",
		slash: "slash",
		open: false,
	},
	{
		name: "sponsorme",
		href: "https://github.com/sponsors/loom4k",
		slash: "arrow",
		open: true,
	},
];

export const Header: FC = () => {
	const isBreakPoint = useMediaQuery(768);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<>
			<div id="top" className="bg-pastel-green h-2 w-full"></div>
			<motion.div
				className={`fixed md:static top-0 w-screen md:w-auto h-24 md:h-48 px-8 md:px-24 2xl:px-56
                    flex flex-row lg:relative
                    ${
						mobileMenuOpen ? "bg-epic-black-light" : "bg-epic-black"
					}`}
			>
				<h1
					onClick={() => {
						window.location.href = "/";
					}}
					className="flex flex-row justify-center items-center text-white text-3xl mr-5"
				>
					<div className="hover:cursor-pointer">
						{CONFIG.NICKNAME}
					</div>
				</h1>

				{!useMediaQuery(835) && (
					<HeaderLink
						name={"about"}
						href={"#about"}
						open={true}
						slash={"hash"}
					/>
				)}

				{!isBreakPoint &&
					links.map((link, key) => {
						if (key == 0) return null;
						if (link.open == false) return null;
						return (
							<HeaderLink
								name={link.name}
								href={link.href}
								slash={link.slash}
								open={link.open}
								key={key}
							/>
						);
					})}

				{isBreakPoint ? (
					<MobileNavButton
						func={setMobileMenuOpen}
						mobileMenuOpen={mobileMenuOpen}
					/>
				) : (
					<ContactButton />
				)}
			</motion.div>
			{mobileMenuOpen && isBreakPoint ? <MobileDropDown /> : null}
		</>
	);
};

interface HeaderLinkProps {
	name: string;
	href: string;
	slash: string;
	open: boolean;
}

const HeaderLink = ({ name, href, slash }: HeaderLinkProps) => {
	const controls = useAnimation();

	return (
		<div
			className={`invisible md:visible
        flex flex-row justify-center items-center 
        text-white
        mt-2.5 ml-10`}
		>
			<motion.div
				onMouseEnter={() => controls.start("hover")}
				onMouseLeave={() => controls.start("initial")}
				variants={variants}
				animate={controls}
			>
				<a href={href}>
					{slash == "slash" ? <Highlight>/</Highlight> : null}
					{slash == "hash" ? <Highlight>#</Highlight> : null}
					{slash == "arrow" ? (
						<Highlight>&#8594;&nbsp;</Highlight>
					) : null}
					{name}
				</a>
			</motion.div>
		</div>
	);
};

const buttonVariants = {
	default: { opacity: 0 },
	hover: { opacity: 1 }
}

const ContactButton = () => {
	const [ buttonHovered, setButtonHovered ] = useState(false);

	return <>
			<button
				className="invisible md:visible
						flex flex-row justify-center items-center 
						text-white text-xl 
						ml-auto hover:cursor-default"
				onClick={() =>
					(window.location.href =
						"https://hidemyemail.cc/a5f135c348ace656c125b7f87aee3bc6")
				}
			>
				<motion.div
					whileHover={{
						y: -5
					}}
					onHoverStart={() => setButtonHovered(true)}
					onHoverEnd={() => setButtonHovered(false)}
					className="w-10 h-10 lg:w-[136px]
					rounded-full lg:rounded-md 
					bg-pastel-green 
					hover:cursor-pointer"
				>
					<p className="mt-1.5 text-epic-black text-left">
						<HiMail className="float-left mt-[5.25px] ml-2.5" />
						<span className="float-left invisible lg:visible ml-2">contact</span>
					</p>
				</motion.div>
			</button>
			<p className="text-white text-[10px] absolute top-[120px] right-[106px]">(contact@loom4k.me)</p>
		</>;
};

interface MobileNavButtonProps {
	func: any;
	mobileMenuOpen: boolean;
}

const MobileNavButton = ({ func, mobileMenuOpen }: MobileNavButtonProps) => {
	const [hiddenOverflow, setHiddenOverflow] = useState(false);

	return (
		<button
			className="visible md:invisible
                    flex flex-row justify-center items-center
                    text-white text-xl
                    ml-auto hover:cursor-default"
			onClick={() => {
				if (hiddenOverflow == false) {
					document.body.style.overflow = "hidden";
					setHiddenOverflow(true);
				} else {
					document.body.style.overflow = "auto";
					setHiddenOverflow(false);
				}
				window.location.href = "#top";
				func(!mobileMenuOpen);
			}}
		>
			<motion.div
				whileHover={{
					y: -5,
				}}
				className="w-10 lg:w-36 h-10
                rounded-full lg:rounded-md
                bg-pastel-green
                hover:cursor-pointer"
			>
				<p className="mt-1.5 text-epic-black">
					<GiHamburgerMenu className="float-left mt-[5.25px] ml-2.5" />
					<span className="invisible lg:visible">contact</span>
				</p>
			</motion.div>
		</button>
	);
};

const MobileDropDown = () => {
	return (
		<motion.div
			className="fixed top-20 w-screen px-10
            flex flex-col overflow-y-scroll
            bg-epic-black-light shadow-epic-black-light shadow-xl"
		>
			{links.map((link, key) => {
				if (link.open == false) return null;
				return (
					<div
						className="hover:cursor-pointer hover:bg-epic-black-light
                    text-center py-2.5 rounded-md"
						onClick={() => {
							window.location.href = link.href;
						}}
						key={key}
					>
						<p className="text-white text-xl">
							{link.slash == "slash" ? (
								<Highlight>/</Highlight>
							) : null}
							{link.slash == "hash" ? (
								<Highlight>#</Highlight>
							) : null}
							{link.slash == "arrow" ? (
								<Highlight>→ </Highlight>
							) : null}

							{link.name}
						</p>
					</div>
				);
			})}
			<motion.div
				className="hover:cursor-pointer bg-pastel-green
            text-center text-xl py-2.5 rounded-md
            mt-2.5"
				whileHover={{
					y: -5,
				}}
				onClick={() =>
					(window.location.href =
						"https://hidemyemail.cc/a5f135c348ace656c125b7f87aee3bc6")
				}
			>
				<p className="text-epic-black">contact@loom4k.me</p>
			</motion.div>
		</motion.div>
	);
};

export default Header;
