import Link from "next/link";
import { FC } from "react";

interface Project {
    name: string
    description: string
    link: string
    stack: string[]
}

const stackRef: { [key: string]: any } = {
    "nextjs": "https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png",
    "tailwind": "https://vasterra.com/blog/wp-content/uploads/2021/08/Tailwind-img.png",
    "typescript": "https://abrudz.github.io/logos/TypeScript.svg",
    "react": "https://i0.wp.com/www.primefaces.org/wp-content/uploads/2017/09/feature-react.png?ssl=1",
    "c#": "https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png",
    "c++": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png",
    "python": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
    "tensorflow": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1200px-Tensorflow_logo.svg.png"
}

import Tilt from 'react-parallax-tilt'

export const RepoCard: FC<Project> = ({
    name,
    description,
    link,
    stack
}) => {
    return (
        <>
            <div>
                <Link href={link}>
                    <Tilt
                        scale={1.05}
                        tiltMaxAngleX={20}
                        tiltMaxAngleY={20}
                    >
                        <div className="p-4 bg-slate-50 hover:bg-slate-100 rounded-lg h-full hover:cursor-pointer">
                            <div className="flex items-center space-x-1">
                                <span className="flex-grow truncate font-bold">{name}</span>
                            </div>
                            <p className="line-clamp-2 text-base h-22 sm:h-32">
                                {description}
                            </p>
                            <div className="flex mt-3">
                                {stack.map(s => (
                                    <img key={s} src={stackRef[s]} className="mt-1 mr-4 block w-6 visible md:invisible lg:visible" />
                                ))}
                            </div>
                        </div>
                    </Tilt>
                </Link>
            </div>
        </>
    )
}
