import { STACK } from "@root/libs/config/stack";
import { motion } from "framer-motion";
import { FC } from "react";

export const Stack: FC = () => {
    return <div>
        <div className="w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-5 gap-4 mt-32 md:mt-0
                    px-8 sm:px-20 md:px-24 2xl:px-56">
            {STACK.map((lang, key) => (
                <StackCard name={lang.name} logo={lang.logo} />
            ))}
        </div>
        <div className="w-full"></div>
    </div>;
}

interface IStackCard {
    name: string;
    logo: string;
}

const StackCard = ({ name, logo }: IStackCard) => {
    return <motion.div className="bg-epic-black-light flex flex-col rounded-md h-40"
                    whileHover={{ y: -5 }}>
        <img src={`./assets/langs/${logo}`} className="w-20 h-20 mx-auto mt-6 rounded-md"></img>
        <p className="mx-auto my-auto text-white">{name}</p>
    </motion.div>
}

export default Stack;