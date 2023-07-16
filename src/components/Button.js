export default function Button({ children, className, ...props }) {
    return (
        <button
            className={`${className} bg-primary text-white hover:opacity-80 py-2 px-5 shadow-lg shadow-primary hover:shadow-sm flex-inline items-center font-semibold border-transparent focus:outline-none  rounded-2xl focus:border-teal-500 focus:ring focus:ring-opacity-30 disabled:opacity-25 focus:ring-teal-600 focus:shadow-sm active:shadow-sm transition ease-in-out duration-500 text-sm`}
            {...props}
        >
            {children}
        </button>
    )
}
