import ApplicationLogo from "./ApplicationLogo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

const Navbar2 = () => {
    const router = useRouter()
    const [open, setOpen] = useState(false)
    const [isi, setIsi] = useState("bg-white/20")
    const handleScroll = () => {
        const offset = window.scrollY
        console.log(offset)
        if (offset > 10) {
            // setIsi("bg-white/80")
        } else {
            setIsi("bg-white/20")
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, [])
    return (
        <nav className={`w-full fixed top-0 left-0 backdrop-blur-xl z-10 bg-white/20`}>
            <div className="md:flex items-center justify-between py-2 md:px-10 px-7 container">
                <div className="cursor-pointer flex items-center">
                    <Link href="/">
                        <ApplicationLogo />
                    </Link>
                </div>
                <div className={`text-3xl absolute right-8 top-6  cursor-pointer lg:hidden ${open ? "text-primary" : "text-slate-500"}`} onClick={() => setOpen(!open)}>
                    <FontAwesomeIcon icon={open ? faTimes : faBars} className="focus:border-none active:border-none focus:outline-none active:outline-none" />
                </div>
                <ul
                    className={`lg:flex lg:items-center lg:pb-0 pb-10 absolute bg-white/95 lg:bg-transparent lg:static lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in-out ${
                        open ? "top-20 opacity-100" : "top-[-600px] opacity-0 lg:opacity-100"
                    }`}
                >
                    <li
                        className={`${
                            router.pathname === "/" ? "text-slate-400" : "text-primary hover:text-slate-400"
                        } lg:ml-8 text-lg lg:my-0 my-7 font-semibold ease-out duration-500 lg:hover:scale-110 `}
                    >
                        <Link href="/">Home</Link>
                    </li>
                    <li
                        className={`${
                            router.pathname === "/#about" ? "text-slate-400" : "text-primary hover:text-slate-400"
                        } lg:ml-8 text-lg lg:my-0 my-7 font-semibold ease-out duration-500 lg:hover:scale-110 `}
                    >
                        <Link href="#about">About</Link>
                    </li>
                    <li
                        className={`${
                            router.pathname === "/#gallery" ? "text-slate-400" : "text-primary hover:text-slate-400"
                        } lg:ml-8 text-lg lg:my-0 my-7 font-semibold ease-out duration-500 lg:hover:scale-110 `}
                    >
                        <Link href="#gallery">Gallery</Link>
                    </li>
                    <li
                        className={`${
                            router.pathname === "/#project" ? "text-slate-400" : "text-primary hover:text-slate-400"
                        } lg:ml-8 text-lg lg:my-0 my-7 font-semibold ease-out duration-500 lg:hover:scale-110 `}
                    >
                        <Link href="#project">Projects</Link>
                    </li>
                    <li
                        className={`${
                            router.pathname === "/contact" ? "text-slate-400" : "text-primary hover:text-slate-400"
                        } lg:ml-8 text-lg lg:my-0 my-7 font-semibold ease-out duration-500 lg:hover:scale-110`}
                    >
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar2
