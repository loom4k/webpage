import { motion, useAnimation } from "framer-motion";
import { FC, useCallback, useEffect, useState } from "react";
import { HiMail } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";

const variants = {
    hover: { y: -5 },
    initial: { y: 0 },
}

const links = [
    {
        name: "about",
        href: "#about",
        slash: false
    },
    {
        name: "stack",
        href: "/stack",
        slash: true
    },
    {
        name: "blog",
        href: "/blog",
        slash: true
    }
]

const useMediaQuery = (width: any) => {
    const [ targetReached, setTargetReached ] = useState(false);

    const updateTarget = useCallback((e: { matches: any; }) => {
        if(e.matches) {
            setTargetReached(true);
        } else {
            setTargetReached(false);
        }
    }, []);

    useEffect(() => {
        const media = window.matchMedia(`(max-width: ${width}px)`);
        media.addListener(updateTarget);
        
        if(media.matches) {
            setTargetReached(true);
        }

        return () => media.removeListener(updateTarget);
    }, []);

    return targetReached;
};

export const Header: FC = () => {
    const isBreakPoint = useMediaQuery(768);
    const [ mobileMenuOpen, setMobileMenuOpen ] = useState(false);
    
    return <> 
        <div className="fixed top-0 w-screen h-48 px-10
                    flex flex-row
                    bg-epic-black shadow-lg">
            <h1 
                onClick={() => { window.location.href = '/' }} 
                className="flex flex-row justify-center items-center text-white text-3xl mr-5"
            >
                <div className="hover:cursor-pointer">loom4k</div>
            </h1>

            { !isBreakPoint && links.map((link, key) => {
                return <HeaderLink name={link.name} href={link.href} slash={link.slash} />
            })}

            { isBreakPoint ? ( <MobileNavButton func={setMobileMenuOpen} mobileMenuOpen={mobileMenuOpen} /> ) : ( <ContactButton /> ) }
        </div>
        { (mobileMenuOpen && isBreakPoint) ? ( <MobileDropDown /> ) : null }
    </>;
}

interface HeaderLinkProps {
    name: string,
    href: string,
    slash: boolean
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
                {slash ? ( <span className="text-pastel-green">/</span> ) : ( <span className="text-pastel-green">#</span> )}
            {name}</a>
        </motion.div>
    </div>;
}

const ContactButton = () => {
    return <button className="invisible md:visible
                    flex flex-row justify-center items-center 
                    text-white text-xl 
                    ml-auto hover:cursor-default"
        onClick={() => { window.location.href = 'mailto:contact@loom4k.me' }}
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
    return <div
        className="fixed top-36 w-screen h-48 px-10
            flex flex-col
            bg-epic-black"
    >
        { links.map((link, key) => {
                return <div className="hover:cursor-pointer hover:bg-epic-black-light
                    text-center py-2.5 rounded-md"
                >
                    <p className="text-white text-xl">{link.slash ? ( <span className="text-pastel-green">/</span> ) : ( <span className="text-pastel-green">#</span> )}{link.name}</p>
                </div>
        }) }
    </div>
}

export default Header;