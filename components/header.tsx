import { motion, useAnimation } from "framer-motion";
import { FC } from "react";
import { HiMail } from "react-icons/hi";

const variants = {
    hover: { y: -5 },
    initial: { y: 0 },
}

export const Header: FC = () => {
    return <div className="fixed top-0 w-screen h-48 px-10
                    flex flex-row
                    bg-epic-black shadow-lg">
        <h1 
            onClick={() => { window.location.href = '/' }} 
            className="flex flex-row justify-center items-center text-white text-3xl mr-5"
        >
            loom4k
        </h1>
        <HeaderLink name={"about"} href={"#about"} slash={true} />
        <HeaderLink name={"stack"} href={"/stack"} slash={true} />
        <HeaderLink name={"blog"} href={"/blog"} slash={true} />
        <button
            className="flex flex-row justify-center items-center 
                text-white text-xl 
                ml-auto hover:cursor-default"
            onClick={() => { window.location.href = 'mailto:contact@loom4k.me' }}
        >
            <motion.div 
                whileHover={{
                    y: -5
                }}
                className="w-36 h-10 rounded-md bg-pastel-green hover:cursor-pointer"
            >
                <p className="mt-1.5"><HiMail className="float-left mt-[5.25px] ml-[15px]"/>contact</p>
            </motion.div>
        </button>
    </div>;
}

interface HeaderLinkProps {
    name: string,
    href: string,
    slash: boolean
}

const HeaderLink = ({ name, href, slash }: HeaderLinkProps) => {
    const controls = useAnimation();

    return <div className="flex flex-row justify-center items-center text-pastel-white mt-2.5 ml-10">
        <motion.div
            onMouseEnter={() => controls.start("hover")}
            onMouseLeave={() => controls.start("initial")}
            variants={variants}
            animate={controls}
        >
            <a href={href} className="text-white">
                {slash && <span className="text-pastel-green">/</span>}
            {name}</a>
        </motion.div>
    </div>;
}

export default Header;