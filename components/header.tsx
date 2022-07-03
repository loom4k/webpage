import { motion, useAnimation } from "framer-motion";
import { FC, useCallback, useEffect, useState } from "react";
import { HiMail } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import useMediaQuery from "@utils/useMediaQuery";

const variants = {
    hover: { y: -5 },
    initial: { y: 0 },
}

const links = [
    {
        name: "about",
        href: "#about",
        slash: "hash"
    },
    {
        name: "stack",
        href: "/stack",
        slash: "slash"
    },
    {
        name: "blog",
        href: "/blog",
        slash: "slash"
    },
    {
        name: "sponsorme",
        href: "https://github.com/sponsors/loom4k",
        slash: "arrow"
    }
]

export const Header: FC = () => {
    const isBreakPoint = useMediaQuery(768);
    const [ mobileMenuOpen, setMobileMenuOpen ] = useState(false);
    
    return <> 
        <motion.div className="fixed md:static top-0 w-screen h-24 md:h-48 px-8 md:px-24 2xl:px-56
                    flex flex-row
                    bg-epic-black">
            <h1 
                onClick={() => { window.location.href = '/' }} 
                className="flex flex-row justify-center items-center text-white text-3xl mr-5"
            >
                <div className="hover:cursor-pointer">loom4k</div>
            </h1>

            { !isBreakPoint && links.map((link, key) => {
                return <HeaderLink name={link.name} href={link.href} slash={link.slash} key={key} />
            })}

            { isBreakPoint ? ( <MobileNavButton func={setMobileMenuOpen} mobileMenuOpen={mobileMenuOpen} /> ) : ( <ContactButton /> ) }
        </motion.div>
        { (mobileMenuOpen && isBreakPoint) ? ( <MobileDropDown /> ) : null }
    </>;
}

interface HeaderLinkProps {
    name: string,
    href: string,
    slash: string
}

const HeaderLink = ({ name, href, slash }: HeaderLinkProps) => {
    const controls = useAnimation();

    return <div className="invisible md:visible
        flex flex-row justify-center items-center 
        text-pastel-white 
        mt-2.5 ml-10"
    >
        <motion.div
            onMouseEnter={() => controls.start("hover")}
            onMouseLeave={() => controls.start("initial")}
            variants={variants}
            animate={controls}
        >
            <a href={href} className="text-white">
                {slash == "slash" ? ( <span className="text-pastel-green">/</span> ) : null}
                {slash == "hash" ? ( <span className="text-pastel-green">#</span> ) : null}
                {slash == "arrow" && !useMediaQuery(800) ? ( <span className="text-pastel-green">→ </span> ) : null}
            {name}</a>
        </motion.div>
    </div>;
}

const ContactButton = () => {
    return <button className="invisible md:visible
                    flex flex-row justify-center items-center 
                    text-white text-xl 
                    ml-auto hover:cursor-default"
            onClick={() => window.location.href='https://hidemyemail.cc/a5f135c348ace656c125b7f87aee3bc6'}
    >
        <motion.div 
            whileHover={{
                y: -5
            }}
            className="w-10 lg:w-36 h-10
                rounded-full lg:rounded-md 
                bg-pastel-green 
                hover:cursor-pointer"
        >
            <p className="mt-1.5 text-epic-black"><HiMail className="float-left mt-[5.25px] ml-2.5"/><span className="invisible lg:visible">contact</span></p>
        </motion.div>
    </button>
}

interface MobileNavButtonProps {
    func: any,
    mobileMenuOpen: boolean
}

const MobileNavButton = ({func, mobileMenuOpen}: MobileNavButtonProps) => {
    return <button className="visible md:invisible
                    flex flex-row justify-center items-center
                    text-white text-xl
                    ml-auto hover:cursor-default"
        onClick={() => { func(!mobileMenuOpen) }}
    >
          <motion.div
            whileHover={{
                y: -5
            }}
            className="w-10 lg:w-36 h-10
                rounded-full lg:rounded-md
                bg-pastel-green
                hover:cursor-pointer"
        >
            <p className="mt-1.5 text-epic-black"><GiHamburgerMenu className="float-left mt-[5.25px] ml-2.5"/><span className="invisible lg:visible">contact</span></p>
        </motion.div>  
    </button>
}

const MobileDropDown = () => {
    return <motion.div
        className="fixed top-20 w-screen h-56 px-10
            flex flex-col
            bg-epic-black"
    >
        { links.map((link, key) => {
                return <div className="hover:cursor-pointer hover:bg-epic-black-light
                    text-center py-2.5 rounded-md"
                    key={key}
                >
                    <p className="text-white text-xl">
                        {link.slash == "slash" ? ( <span className="text-pastel-green">/</span> ) : null}
                        {link.slash == "hash" ? ( <span className="text-pastel-green">#</span> ) : null}
                        {link.slash == "arrow" ? ( <span className="text-pastel-green">→ </span> ) : null}
                        
                        {link.name}
                    </p>
                </div>
        }) }
        <motion.div className="hover:cursor-pointer bg-pastel-green
            text-center text-xl py-2.5 rounded-md
            mt-2.5"
            whileHover={{
                y: -5
            }}
            onClick={() => window.location.href='https://hidemyemail.cc/a5f135c348ace656c125b7f87aee3bc6'}>
            <p className="text-epic-black"
            >contact@loom4k.me</p>
        </motion.div>
    </motion.div>
}

export default Header;