import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import ApplicationLogo from "./ApplicationLogo"

function Navbar() {
    const [navbar, setNavbar] = useState(false)
    return (
        <nav className="w-full bg-white fixed top-0 left-0 right-0 z-10">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-3 md:block">
                        <Link href="/" legacyBehavior>
                            <a className="hover:scale-110 transition ease-in-out duration-200">
                                <ApplicationLogo />
                            </a>
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-600 rounded-md outline-none hover:text-primary focus:border-gray-300 focus:border transition ease-in-out duration-200"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <FontAwesomeIcon icon={faTimes} className="text-lg focus:border-none active:border-none focus:outline-none active:outline-none" />
                                ) : (
                                    <FontAwesomeIcon icon={faBars} className="text-lg focus:outline-none active:outline-none focus:border-none active:border-none" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 transition ease-in-out duration-200 ${navbar ? "p-10 md:p-0 block" : "hidden"}`}>
                        <ul className="h-screen md:h-auto items-center justify-center md:flex">
                            <li className="pb-6 text-xl py-4 md:py-3 md:text-lg text-slate-600 md:hover:scale-110 transition ease-in-out duration-300 px-4 text-center  border-b-2 border-gray-200 md:border-b-0  hover:text-primary  md:hover:text-primary md:hover:bg-transparent">
                                <Link href="#about" onClick={() => setNavbar(!navbar)}>
                                    About
                                </Link>
                            </li>
                            <li className="pb-6 text-xl py-4 md:py-3 md:text-lg text-slate-600 md:hover:scale-110 transition ease-in-out duration-300 px-4 text-center   border-b-2 border-gray-200 md:border-b-0  hover:text-primary  md:hover:text-primary md:hover:bg-transparent">
                                <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                                    Blogs
                                </Link>
                            </li>

                            <li className="pb-6 text-xl py-4 md:py-3 md:text-lg text-slate-600 md:hover:scale-110 transition ease-in-out duration-300 px-4 text-center   border-b-2 border-gray-200 md:border-b-0  hover:text-primary  md:hover:text-primary md:hover:bg-transparent">
                                <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                                    Projects
                                </Link>
                            </li>
                            <li className="pb-6 text-xl py-4 md:py-3 md:text-lg text-slate-600 md:hover:scale-110 transition ease-in-out duration-300 px-4 text-center   border-b-2 border-gray-200 md:border-b-0  hover:text-primary  md:hover:text-primary md:hover:bg-transparent">
                                <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
