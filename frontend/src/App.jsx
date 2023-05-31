import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'

import Hero from './components/Hero'
import NavBar from './components/NavBar'
// import {Route, Routes} from 'react-router-dom'
// import { ContactUs } from './components/ContactUs'
// import AboutUs from './components/AboutUs'


function App() {
    return (
        <>
      <NavBar />
       <Hero />
      {/* <ContactUs/> */}
      {/* <AboutUs/> */}

            <Footer />
            {/* <Routes>
            <Route path="/contactus" element={<ContactUs />}> </Route>
            <Route path="/aboutus" element={<AboutUs />}></Route>
            </Routes> */}
        </>

    )
}

export default App
