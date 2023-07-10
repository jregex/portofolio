import Footer from "./Footer"
import Header from "./Header"
import { Heebo } from "next/font/google"
const heebo = Heebo({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] })
function AppLayout({ children }) {
    return (
        <div className={`${heebo.className} max-h-screen w-screen overflow-x-hidden`}>
            <Header />
            <main className="w-screen">{children}</main>
            <Footer />
        </div>
    )
}

export default AppLayout
