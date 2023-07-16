import React from "react"
import Slider from "react-slick"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenNib, faPhotoFilm, faCode } from "@fortawesome/free-solid-svg-icons"
const Skills = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "80px",
        slidesToShow: 3,
        speed: 500,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }
    return (
        <section className="pt-16 pb-12 bg-dark2" id="skills">
            <div className="container">
                <div className="w-full px-4 mb-20">
                    <h4 className="font-bold text-primary text-xl uppercase text-center mb-2">Skills</h4>
                    <h2 className="font-bold text-3xl text-slate-200 text-center">Our Team Skills</h2>
                </div>
                <div className="w-full px-4">
                    <Slider {...settings} className="gap-x-4">
                        <div className="text-center">
                            <FontAwesomeIcon
                                icon={faPhotoFilm}
                                className="lg:text-5xl text-6xl hover:text-primary duration-500 ease-in-out text-slate-200 mb-10 focus:border-none active:border-none focus:outline-none active:outline-none"
                            />
                            <h4 className="text-slate-400 font-semibold text-sm uppercase hover:text-primary duration-500 ease-in-out">Videography & Photography</h4>
                        </div>
                        <div className="text-center">
                            <FontAwesomeIcon
                                icon={faCode}
                                className="lg:text-5xl text-6xl hover:text-primary duration-500 ease-in-out mb-10 text-slate-200 focus:border-none active:border-none focus:outline-none active:outline-none"
                            />
                            <h4 className="text-slate-400 font-semibold text-sm uppercase hover:text-primary duration-500 ease-in-out">Website & Mobile</h4>
                        </div>
                        <div className="text-center">
                            <FontAwesomeIcon
                                icon={faPenNib}
                                className="lg:text-5xl text-6xl hover:text-primary duration-500 ease-in-out text-slate-200 mb-10 focus:border-none active:border-none focus:outline-none active:outline-none"
                            />
                            <h4 className="text-slate-400 font-semibold text-sm uppercase hover:text-primary duration-500 ease-in-out">Design Graphic</h4>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Skills
