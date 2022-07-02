import Status from "@utils/lanyard";
import useMediaQuery from "@utils/useMediaQuery";
import { FC } from "react";

export const Hero: FC = () => {
    const age = new Date().getFullYear() - 2007;
    const isLargeBreakpoint = useMediaQuery(1024);

    return <div className="w-full mt-24 md:mt-0
                flex flex-row
                bg-epic-black text-center md:text-left">
        <div className="flex flex-col md:w-1/2
            px-24 md:pr-6 2xl:pl-56 pt-16">
            <h1 className="text-6xl tracking-tighter text-white">
                Loïk Mallat
                { !isLargeBreakpoint ? (
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
                I am a { age } year old software developer living {!useMediaQuery(980) && <br />}in Montreal, Canada.
                <br /><br />
                I work with&nbsp;
                <LanguageLink name={"typescript"} href={"https://www.typescriptlang.org/"} color={"text-pastel-blurple"} />,&nbsp;
                <LanguageLink name={"java"} href={"https://www.java.com/"} color={"text-pastel-orange"} />,&nbsp;
                <LanguageLink name={"c#"} href={"https://docs.microsoft.com/en-us/dotnet/csharp/"} color={"text-pastel-pink"} />

                <br /><br />
                I am <Status />
            </p>
        </div>
        {!useMediaQuery(768) && 
            <div className="flex flex-row w-1/2 bg-pastel-blurple">

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
    return <span className={color + " " + "hover:cursor-pointer"} onClick={() => window.location.href = 'https://www.typescriptlang.org/'}>
        {name}
    </span>;   
}

export default Hero;