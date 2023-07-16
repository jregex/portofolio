import Input from "@/components/Input"
import Label from "@/components/Label"
import Button from "@/components/Button"

function FormContact() {
    return (
        <form className="w-full px-4 lg:w-1/2">
            <div className="w-full p-4 mb-8 bg-slate-100 rounded-xl space-y-2">
                <div className="flex justify-between text-sm lg:text-base text-secondary antialiased">
                    <p className="font-semibold">Address</p>
                    <p>Makassar city, South Sulawesi</p>
                </div>

                <div className="flex justify-between text-sm lg:text-base text-secondary antialiased">
                    <p className="font-semibold">Phone Number</p>
                    <p>
                        +{"("}62{")"} 82150306287
                    </p>
                </div>
                <div className="flex justify-between text-sm lg:text-base text-secondary antialiased">
                    <p className="font-semibold">Email</p>
                    <p>
                        {" "}
                        <a href="mailto:movementproject@gmail.com" target="_blank" className="text-primary hover:text-dark duration-500">
                            movementproject@gmail.com
                        </a>
                    </p>
                </div>
            </div>
            <div className="w-full px-4 mb-8">
                <Label className="mb-2" htmlFor="nama">
                    Nama
                </Label>
                <Input id="nama" className="focus:shadow-xl" />
            </div>
            <div className="w-full px-4 mb-8">
                <Label className="mb-2" htmlFor="email">
                    Email
                </Label>
                <Input id="email" className="focus:shadow-xl" />
            </div>
            <div className="w-full px-4 mb-8">
                <Label className="mb-2" htmlFor="subjek">
                    Subjek
                </Label>
                <Input id="subjek" className="focus:shadow-xl" />
            </div>
            <div className="w-full px-4 mb-8">
                <Label className="mb-2" htmlFor="body">
                    Komentar
                </Label>
                <textarea
                    className="rounded-md bg-slate-200 text-slate-600 border-none w-full h-40 focus:outline-none focul:ring-2 focus:border-primary focus:ring-primary focus:shadow-xl focus:ring-opacity-70"
                    id="body"
                />
            </div>
            <div className="w-full px-4 mb-10">
                <Button type="submit" className="text-xs w-full flex py-3 justify-center font-semibold">
                    Kirim
                </Button>
            </div>
        </form>
    )
}

export default FormContact
