import Navbar from "./Navbar"

const Header = () => {
    return (
        <header>
            <Navbar />
            <div className="pt-36 pb-8 bg-dark mb-2">
                <div className="container">
                    <h1>Selamat Datang</h1>
                </div>
            </div>
        </header>
    )
}

export default Header
