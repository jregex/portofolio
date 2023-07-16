import Input from "@/components/Input"
import Label from "@/components/Label"
import Button from "@/components/Button"

function Contact() {
    return (
        <form className="w-full px-4 lg:w-1/2">
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

export default Contact
