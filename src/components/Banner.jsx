// import { useRouter } from 'next/router'
export default function Banner({ nama }) {
    // const { pathname } = useRouter()
    // const name = pathname.split('/').slice(1).join()
    return (
        <div className="carousel w-screen overflow-x-hidden" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-sine">
            <div className="w-full bg-dark -z-10 h-[300px] lg:h-[400px] relative">
                <div className="container">
                    <div className="flex flex-wrap items-center w-full h-[350px] lg:h-[400px]">
                        <div className="w-full lg:w-1/2 px-4">
                            <h5 className="font-bold text-white text-xl lg:text-3xl uppercase flex items-center">
                                <span className="relative flex h-5 w-5">
                                    <span className="animate-ping animation-delay-300 absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-5 w-5 bg-primary opacity-60"></span>
                                </span>
                                &nbsp;{nama}
                            </h5>
                        </div>
                        <div className="absolute top-20 right-12 lg:right-[200px] rounded-full bg-primary w-[70px] h-[70px] lg:w-[120px] lg:h-[120px] -z-1 filter blur-2xl lg:blur-3xl opacity-90 animate-pulse animation-delay-3000" />
                        <div className="absolute bottom-10 right-20 lg:right-[300px] rounded-full bg-pink-500 w-[70px] h-[70px] lg:w-[120px] lg:h-[120px] -z-1 filter blur-2xl lg:blur-3xl opacity-90 animate-pulse animation-delay-4000" />
                    </div>
                </div>
            </div>
        </div>
    )
}
