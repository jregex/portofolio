import ApplicationLogo from "./ApplicationLogo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import Link from "next/link"

function Navbar2() {
    let links = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "About",
            link: "/about",
        },
        {
            name: "Blogs",
            link: "/blog",
        },
        {
            name: "Projects",
            link: "/project",
        },
        {
            name: "Contact",
            link: "/contact",
        },
    ]
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
        <nav className={`w-full fixed top-0 left-0 lg:backdrop-blur-xl z-10 ${isi}`}>
            <div className="md:flex items-center justify-between py-2 md:px-10 px-7 container">
                <div className="cursor-pointer flex items-center">
                    <ApplicationLogo />
                </div>
                <div className={`text-3xl absolute right-8 top-6  cursor-pointer lg:hidden ${open ? "text-primary" : "text-slate-300"}`} onClick={() => setOpen(!open)}>
                    <FontAwesomeIcon icon={open ? faTimes : faBars} className="focus:border-none active:border-none focus:outline-none active:outline-none" />
                </div>
                <ul
                    className={`lg:flex lg:items-center lg:pb-0 pb-10 absolute bg-white/20 backdrop-blur-xl lg:backdrop-blur-0 lg:bg-transparent lg:static lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in-out ${
                        open ? "top-20 opacity-100" : "top-[-600px] opacity-0 lg:opacity-100"
                    }`}
                >
                    {links.map((link, index) => (
                        <li key={index} className="lg:ml-8 text-lg text-white lg:my-0 my-7 ease-out duration-500 lg:hover:scale-110 hover:text-primary">
                            <Link href={link.link}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar2
