import { useState, FC } from 'react'
import Link from 'next/link'
import {
    FiMenu
} from 'react-icons/fi'

const links = [
    {
        name: "home",
        href: "/#",
        id: 1
    },
    {
        name: "contact",
        href: "/#contact",
        id: 4
    },
    {
        name: "blog",
        href: "/blog",
        id: 5
    },
    {
        name: "changelog",
        href: "/changelog",
        id: 6
    },
]

export const Navbar: FC = () => {
    const [visible, setVisible] = useState(false);

    const onClose = () => {
        setVisible(!visible);
    }

    return(
        <>
            <nav className="relative text-base px-12 py-20 flex justify-between bg-white">
                <p className='text-black text-3xl'>
                    <Link
                        href='/'
                    >
                        loom4k
                    </Link>
                </p>
                <div className="flex-grow" />
                <div className="lg:hidden">
                    <button
                        aria-label="Hamburger"
                        onClick={() => {onClose()}}
                        className="flex items-center text-gray-900 dark:text-white p-3 focus:outline-none"
                    >
                        <FiMenu className='block h-4 w-4 fill-current' />
                    </button>
                </div>
                <ul className='hidden absolute transform translate-y-1/4 ml-40 lg:flex lg:space-x-6'>
                    {links.map(link => (
                        <p key={link.id} className='hover:text-green-500 transition-all nav-element'>
                            <span className='text-green-500 text-lg font-normal slash'>/</span>
                            <Link
                                href={link.href}
                            >
                                {link.name}
                            </Link>
                        </p>
                    ))}
                </ul>
            </nav>
        </>
    )
}