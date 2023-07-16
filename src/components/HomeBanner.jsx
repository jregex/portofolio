import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"
import Image from "next/image"

function HomeBanner() {
    return (
        <section id="banner" className="pt-40 pb-10 bg-dark">
            <div className="container">
                <div className="flex flex-wrap pb-10">
                    <motion.div initial={{ opacity: 0, y: 500 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }} className="w-full self-center px-4 lg:w-1/2">
                        <h1 className="text-lg font-semibold text-slate-300 md:text-xl mb-2">
                            Welcome to <span className="block font-bold text-white text-3xl mt-1 lg:text-4xl uppercase">Movement Project</span>
                        </h1>
                        <h2 className="font-medium text-sky-600 text-md mb-4 lg:text-lg gap-x-2 flex">
                            <FontAwesomeIcon icon={faStar} className="focus:border-none active:border-none focus:outline-none active:outline-none" />
                            <FontAwesomeIcon icon={faStar} className="focus:border-none active:border-none focus:outline-none active:outline-none" />
                            <FontAwesomeIcon icon={faStar} className="focus:border-none active:border-none focus:outline-none active:outline-none" />
                            <FontAwesomeIcon icon={faStar} className="focus:border-none active:border-none focus:outline-none active:outline-none" />
                            <FontAwesomeIcon icon={faStar} className="focus:border-none active:border-none focus:outline-none active:outline-none" />
                            <FontAwesomeIcon icon={faStar} className="focus:border-none active:border-none focus:outline-none active:outline-none" />
                            <FontAwesomeIcon icon={faStar} className="focus:border-none active:border-none focus:outline-none active:outline-none" />
                            <FontAwesomeIcon icon={faStar} className="focus:border-none active:border-none focus:outline-none active:outline-none" />
                            <FontAwesomeIcon icon={faStar} className="focus:border-none active:border-none focus:outline-none active:outline-none" />
                        </h2>

                        <p className="font-semibold text-lg text-slate-300">
                            Nothing Lasts Forever, Apart From <span className="font-bold text-xl text-primary uppercase">Movement.</span>
                        </p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: -300 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2 }} className="w-full self-end px-2 lg:w-1/2">
                        <div className="mt-10 relative lg:mt-9 right-0 animate-pantul-slow">
                            <Image
                                width={400}
                                height={400}
                                src="/assets/rocket.png"
                                className="max-w-full w-80 lg:w-100 h-auto mx-auto bg-none lg:max-w-1/2 rounded-full"
                                alt="Rocket"
                                blurDataURL="https://dummyimage.com/640x360/fff/aaa"
                                priority
                            />
                            <div className="absolute -z-10 top-5 lg:top-0 left-2 lg:left-36 md:left-20 rounded-full w-32 h-32 animate-pantul-slow lg:w-40 lg:h-40 bg-primary filter blur-3xl opacity-60 mix-blend-multiply" />
                            <div className="absolute -z-10 top-10 right-4 lg:right-24 md:right-20 w-40 h-40 animate-pantul-slow lg:w-48 lg:h-48 bg-sky-400 rounded-full mix-blend-multiply filter blur-3xl opacity-60" />
                            <div className="absolute -z-10 bottom-0 right-32 lg:right-64 w-48 h-48 animate-pantul-slow lg:w-58 lg:h-58 bg-pink-500 rounded-full mix-blend-multiply filter blur-2xl opacity-80" />
                            {/* <div className="absolute -z-10 bottom-0 right-3 lg:right-28 w-28 h-28 animate-pantul-slow lg:w-32 lg:h-32 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70" /> */}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default HomeBanner
