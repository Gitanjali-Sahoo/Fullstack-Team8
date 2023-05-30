import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Footer from './components/Footer'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import Products from './components/Products'
import Home from '../Pages/Home'
import SignIn from './components/SignIn'
import Footer from './components/Footer'
function App() {
    return (
        <>
            <NavBar />
            {/* <Hero /> */}
            {/* <Products /> */}
            {/* <SignIn /> */}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/laptop" element={<Products />} />
                <Route path="/signin" element={<SignIn/>}/>
            </Routes>
            <Footer />
        </>
    )
}

export default App
