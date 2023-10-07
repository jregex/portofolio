import AppLayout from "@/components/layouts/AppLayout"
import Head from "next/head"
import Image from "next/image"
import Skills from "@/components/Skills"
import HomeBanner from "@/components/HomeBanner"
import FormContact from "@/components/FormContact"
import Cards from "@/components/Cards"

export default function Home() {
    const image = [
        {
            src: "https://dummyimage.com/600x400/050b33/cfd2fc",
            alt: "project image 1",
        },
        {
            src: "https://dummyimage.com/600x400/050b33/cfd2fc",
            alt: "project image 2",
        },
        {
            src: "https://dummyimage.com/600x400/050b33/cfd2fc",
            alt: "project image 3",
        },
        {
            src: "https://dummyimage.com/600x400/050b33/cfd2fc",
            alt: "project image 4",
        },
        {
            src: "https://dummyimage.com/600x400/050b33/cfd2fc",
            alt: "project image 5",
        },
        {
            src: "https://dummyimage.com/600x400/050b33/cfd2fc",
            alt: "project image 6",
        },
        {
            src: "https://dummyimage.com/600x400/050b33/cfd2fc",
            alt: "project image 7",
        },
        {
            src: "https://dummyimage.com/600x400/050b33/cfd2fc",
            alt: "project image 8",
        },
    ]
    const galleries = [
        {
            src: "https://dummyimage.com/600x400/050b33/cfd2fc",
            alt: "project image 1",
        },
        {
            src: "https://dummyimage.com/600x400/050b33/cfd2fc",
            alt: "project image 2",
        },
        {
            src: "https://dummyimage.com/600x400/050b33/cfd2fc",
            alt: "project image 3",
        },
        {
            src: "https://dummyimage.com/600x400/050b33/cfd2fc",
            alt: "project image 4",
        },
        {
            src: "https://dummyimage.com/600x400/050b33/cfd2fc",
            alt: "project image 5",
        },
        {
            src: "https://dummyimage.com/600x400/050b33/cfd2fc",
            alt: "project image 6",
        },
    ]
    return (
        <>
            <Head>
                <title>Beranda | MVP</title>
                <meta name="description" content="Nothing Lasts Forever, Apart From Movement" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/assets/logo_mvp.ico" />
            </Head>
            <AppLayout>
                <HomeBanner />
                {/* about section */}
                <section id="about" className="pt-36 pb-32 bg-white">
                    <div className="container">
                        <div className="flex flex-wrap">
                            <div className="hidden px-4 lg:flex items-stretch lg:w-1/2">
                                <Image width={500} height={500} src={require("@/assets/img/about_us.svg")} alt="About us" />
                            </div>
                            <div className="w-full px-4 mb-10 lg:w-1/2">
                                <h4 className="font-bold uppercase text-lg text-primary mb-3">About Us</h4>
                                <h2 className="text-xl lg:text-2xl font-bold text-dark2 mb-5 max-w-md">sedikit deskripsi tentang kami</h2>
                                <blockquote className="p-4 my-4 border-l-4 border-primary bg-gray-100">
                                    <p className="text-base italic font-medium leading-relaxed text-gray-900">&ldquo; Nothing Lasts Forever, Apart From Movement &quot;.</p>
                                </blockquote>
                                <br />
                                <p className="font-medium text-secondary antialiased leading-relaxed text-base text-justify max-w-xl lg:text-lg mb-5">
                                    Movement Project ialah wadah kolaborasi dari berbagai desainer grafis dimana setiap anggota tim kami memiliki keahlian khusus dalam berbagai
                                    aspek seperti desain website, aplikasi android, fotografi & videografi, yang profesional dan berpengalaman. Kami memiliki passion yang terbukti
                                    dalam menggabungkan imajinasi menjadi kreatifitas untuk menghasilkan desain yang memukau dan memenuhi kebutuhan klien.
                                </p>
                                <div className="flex items-center">
                                    <a
                                        href="https://www.youtube.com"
                                        target="_blank"
                                        className="w-10 h-10 mr-3 rounded-full flex justify-center items-center border text-primary border-primary hover:bg-primary hover:text-white hover:scale-125 transition duration-300 ease-in-out"
                                    >
                                        <svg role="img" width={20} viewBox="0 0 24 24" className="fill-current " xmlns="http://www.w3.org/2000/svg">
                                            <title>YouTube</title>
                                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="https://www.instagram.com/movementproject45"
                                        target="_blank"
                                        className="w-10 h-10 mr-3 rounded-full flex justify-center items-center border text-primary border-primary hover:bg-primary hover:text-white hover:scale-125 transition duration-300 ease-in-out"
                                    >
                                        <svg role="img" width={20} className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <title>Instagram</title>
                                            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="https://www.twitter.com"
                                        target="_blank"
                                        className="w-10 h-10 mr-3 rounded-full flex justify-center items-center border text-primary border-primary hover:bg-primary hover:text-white hover:scale-125 transition duration-300 ease-in-out"
                                    >
                                        <svg role="img" viewBox="0 0 24 24" width={20} className="fill-current" xmlns="http://www.w3.org/2000/svg">
                                            <title>Twitter</title>
                                            <path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148 13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end about section */}
                {/* skills */}
                <Skills />
                {/* end skills */}
                {/* projects */}
                <section className="pt-36 pb-32 bg-gray-100" id="project">
                    <div className="container">
                        <div className="w-full px-4">
                            <div className="max-w-xl mx-auto text-center mb-10">
                                <h4 className="font-semibold text-lg uppercase text-primary mb-2">Project</h4>
                                <h2 className="font-bold text-dark text-2xl mb-4">Project terbaru</h2>
                                <p className="text-md font-medium text-secondary">Daftar project pernah dikerja sebelumnya</p>
                            </div>
                        </div>
                        <div className="w-full px-4">
                            <div className="mb-12 lg:p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {image.map((img, index) => (
                                    <div className="rounded-md overflow-hidden mb-4 hover:opacity-70 hover:shadow-lg ease-out duration-300" key={index}>
                                        <Image src={img.src} alt={img.alt} className="w-full h-auto" sizes="100vw" width="0" height="0" />
                                        <div className="p-4">
                                            <h3 className="font-semibold text-xl text-dark mt-5 mb-2">Landing page MVP</h3>
                                            <p className="font-medium text-base text-secondary antialiased leading-relaxed">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illum corporis nesciunt.
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                {/* end projects */}
                {/* gallery */}
                <section className="pt-32 pb-32 bg-gradient-to-br from-dark to-secondary" id="gallery">
                    <div className="container">
                        <div className="w-full px-4 text-center">
                            <h4 className="font-semibold text-primary text-lg mb-2 uppercase">Gallery</h4>
                            <h2 className="font-bold text-white text-2xl text-center mb-10">List Gallery</h2>
                        </div>
                        <div className="w-full px-4">
                            <div className="mb-12 lg:p-4 grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-4">
                                {galleries.map((img, index) => (
                                    <Cards src={img.src} alt={img.alt} key={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                {/* end gallery */}
                {/* contact */}
                <section className="pt-24 pb-32 bg-white" id="contact">
                    <div className="container">
                        <div className="w-full px-4">
                            <div className="max-w-xl mx-auto text-center mb-10">
                                <h4 className="font-bold text-3xl text-primary mb-2">Kontak</h4>
                                <h2 className="font-semibold text-dark text-lg mb-2 sm:text-2xl lg:text-xl">Hubungi kami</h2>
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            <FormContact />
                            <div className="hidden px-10 lg:flex items-stretch justify-evenly lg:w-1/2 relative">
                                <div className="absolute right-0 top-[100px] scale-120 rounded-full w-24 h-24 bg-primary mix-blend-multiply animate-pulse animation-delay-2000 bg-opacity-60" />
                                <div className="absolute right-12 top-[200px] scale-120 rounded-full w-12 h-12 bg-primary mix-blend-multiply animate-pulse animation-delay-3000 bg-opacity-50" />
                                <Image width="0" sizes="100vw" height="0" src={require("@/assets/img/contact_us.svg")} className="w-full h-auto" alt="Contact us" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* end contact */}
            </AppLayout>
        </>
    )
}
