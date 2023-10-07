import Banner from "@/components/Banner"
import FormContact from "@/components/FormContact"
import AppLayout from "@/components/layouts/AppLayout"
import Head from "next/head"

function Contact() {
    return (
        <>
            <Head>
                <title>Contact Us | MVP</title>
                <meta name="description" content="Nothing Lasts Forever, Apart From Movement" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/assets/logo_mvp.ico" />
            </Head>
            <AppLayout>
                <Banner nama="Contact" />
                <section className="pt-28 pb-24">
                    <div className="container">
                        <div className="w-full px-4">
                            <div className="max-w-xl mx-auto text-center mb-16">
                                <h4 className="font-bold text-3xl text-primary mb-2">Contact Us</h4>
                                <h2 className="font-semibold text-secondary text-base mb-2 sm:text-2xl lg:text-xl">Contact to get more about us or rate our Project</h2>
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            <FormContact />
                        </div>
                    </div>
                </section>
            </AppLayout>
        </>
    )
}

export default Contact
