const Input = ({ disabled = false, className, ...props }) => (
    <input
        disabled={disabled}
        className={`${className} rounded-md w-full text-slate-600 bg-slate-200 text-sm p-2 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-70`}
        {...props}
    />
)

export default Input
