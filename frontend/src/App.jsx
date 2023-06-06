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
import BillingAddress from './components/BillingAddress'
import ContactUs from './components/ContactUs'
import AboutUs from './components/AboutUs'

import Smartphones from './components/Smartphones'
import PhoneProductDetails from './components/PhoneProductDetails'

import HeadPhoneProducts from './components/HeadPhoneProducts'


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
                <Route path="/cart" element={<Cart />} />
                <Route path="/laptop" element={<Products />} />
                <Route path="/headphone" element={<HeadPhoneProducts />}></Route>
                <Route path="/laptop/:id" element={<ProductDetails />} />
  <Route path="/phone/:id" element={<PhoneProductDetails />} />
                <Route path="/signin" element={<SignIn />} />

                <Route path="/billing" element={<BillingAddress />} />

                <Route path="/contactUs" element={<ContactUs />}>  </Route>

                      <Route path="/smartphones" element={<Smartphones />}></Route>


                <Route path="/aboutUs" element={<AboutUs />}></Route>
            </Routes>
            <Footer />
        </>
    )
}

export default App
