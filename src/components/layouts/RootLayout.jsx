import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"

const RootLayout = () => {
  return (
    <div className="bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen">
    <header>
    <Navbar />
    </header>
    <main>
        <Outlet/>
    </main>
    <footer>
      <Footer/>
    </footer>
  </div>
  )
}

export default RootLayout