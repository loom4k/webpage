import { FC } from "react";

import { CONFIG } from "@root/libs/config";
import Status from "@utils/lanyard";
import useMediaQuery from "@utils/useMediaQuery";

export const Hero: FC = () => {
    const date = new Date().getFullYear();

    return <div className="w-full mt-24 md:mt-0
                flex flex-row
                bg-epic-black text-center md:text-left">

        {
            useMediaQuery(768) && (
                <div>
                    
                </div>
            )
        }
        <div className="flex flex-col lg:w-1/2
            px-8 sm:px-20 md:px-24 md:pr-6 2xl:pl-56 pt-16">
            <h1 className="text-6xl tracking-tighter text-white">
                Loïk Mallat
                { !useMediaQuery(768) ? (
                    <p className="text-3xl">
                        <i>
                            aka&nbsp;
                        </i>
                        <span className="text-pastel-green">
                            loom
                        </span>
                    </p> ) : null }
            </h1>
            <p className="mt-6 text-white text-sm">
                I am a { date - 2007 } year old software developer living {!useMediaQuery(980) && <br />}in Montreal, Canada.
                <br /><br />
                I have over { date - 2019 } years of experience in software development, and I am currently working with&nbsp;
                <LanguageLink name={"typescript"} href={"https://www.typescriptlang.org/"} color={"text-pastel-blurple"} />,&nbsp;
                <LanguageLink name={"java"} href={"https://www.java.com/"} color={"text-pastel-orange"} />&nbsp;and&nbsp;
                <LanguageLink name={"c#"} href={"https://docs.microsoft.com/en-us/dotnet/csharp/"} color={"text-pastel-pink"} />

                <br /><br />
                Right now, I am <span className="text-pastel-green"><Status /></span>
            </p>
        </div>
        {!useMediaQuery(1023) && 
            <div className="flex flex-col w-1/2">
                <div className="flex flex-col items-center justify-center mx-auto mr-24 2xl:mr-56">
                    <img src={CONFIG.AVATAR_URL} alt="loom4k" className="mx-auto md:h-128 md:w-128 w-full max-w-lg object-cover rounded-3xl" />
                </div>
            </div>
        }
    </div>;
}

interface LanguageLinkProps {
    name: string,
    href: string,
    color: string
}

const LanguageLink = ({ name, href, color }: LanguageLinkProps) => {
    return <span className={color + " " + "hover:cursor-pointer"} onClick={() => window.location.href = href}>
        {name}
    </span>;   
}

export default Hero;