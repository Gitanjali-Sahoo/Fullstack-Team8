// import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
// import Hero from './components/Hero'
import Products from './components/Products'
import { Routes, Route } from 'react-router-dom'
import Home from './Page/Home'
import ProductDetails from './components/ProductDetails'
import SignIn from './components/SignIn'
import Cart from './components/Cart'

function App() {
    //Sara code
    //    const [showHero, setShowHero] = useState(true)

    //     const handleIconClicked = () => {
    //         setShowHero(false)
    //     }

    return (
        <>
            {/* <NavBar onIconClicked={handleIconClicked} />
            {showHero && <Hero />} */}
            <NavBar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/laptop" element={<Products />} />
                <Route path="/laptop/:id" element={<ProductDetails />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
