import { Status } from "@components/Home/Hero/Status"
import { FC } from "react"

const languages = [
    {
        name: "Java",
        link: "https://www.oracle.com/java/",
        color: "text-orange-300",
        hover: "text-orange-500"
    },
    {
        name: "Typescript",
        link: "https://www.typescriptlang.org/",
        color: "text-blue-300",
        hover: "text-blue-500"
    },
    {
        name: "C#",
        link: "https://docs.microsoft.com/en-us/dotnet/csharp/",
        color: "text-purple-300",
        hover: "text-purple-500"
    }
]

export const Hero: FC = () => {
    return (
        <>
            <section className="bg-white pt-12 lg:pt-20 pb-12 md:pb-24">
                <div className="container mx-12 px-4">
                    <div className="flex flex-wrap -mx-4 flex-col-reverse md:flex-row">
                        <div className="w-full text-center lg:text-left">
                            <div className="max-w-md mx-auto lg:mx-0">
                                <h1 className="my-3 md:mt-0 text-4xl lg:text-5xl text-black font-bold">
                                    Loïk Mallat
                                </h1>
                                <p className="-mt-4 text-xl lg:text-2xl text-black">
                                    <i>aka</i> <span className="text-green-500">loom4k</span>
                                </p>
                            </div>
                            <div className="mt-6 max-w-sm mx-auto lg:mx-0 leading-5">
                                <p className="mb-6 text-gray-600">
                                    I am a 15 year old software developer based in Montreal, Canada.
                                    <br /><br />
                                    I work with {
                                        languages.map((language, index) => (
                                                <a
                                                    key={language.name}
                                                    href={language.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-block mr-1"
                                                >
                                                    <span className={`${language.color}`}>{language.name}<span className="text-gray-600">{(index == languages.length - 1) ? "" : ","}</span></span>
                                                </a>
                                            )
                                        )
                                    }
                                    <br /><br />
                                    <Status />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}