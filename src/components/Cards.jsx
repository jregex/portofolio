import Image from "next/image"

function Cards({ alt, src }) {
    return (
        <Image
            src={src}
            alt={alt}
            className="w-full h-auto rounded-xl hover:scale-110 hover:ring-2 hover:ring-primary hover:shadow-2xl hover:shadow-primary/50 transition-all duration-500 ease-in-out"
            sizes="100vw"
            width="0"
            height="0"
        />
    )
}

export default Cards
