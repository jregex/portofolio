import "@/styles/custom.module.css"

function BtnContact({ title, className }) {
    return (
        <button
            className={`${className} w-full group hover:scale-95 justify-center shadow-lg shadow-primary/50 hover:shadow-sm bg-primary font-semibold text-white rounded-full flex items-center p-4 pl-[0.9em] active:scale-[0.95em] overflow-hidden transition-all duration-300`}
        >
            <div className="svg-wrapper-1">
                <div className="group-hover:animate-fly-1">
                    <svg
                        height="24"
                        width="24"
                        className="group-hover:translate-x-[1.2em] group-hover:rotate-[45deg] group-hover:scale-110"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                            d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                            fill="currentColor"
                        ></path>
                    </svg>
                </div>
            </div>
            <span className="transition-all duration-300 ease-in-out origin-center group-hover:translate-x-[20em] block ml-[0.3em]">{title}</span>
        </button>
    )
}

export default BtnContact
