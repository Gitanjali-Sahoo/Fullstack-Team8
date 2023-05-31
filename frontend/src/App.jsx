import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'

import Hero from './components/Hero'
import NavBar from './components/NavBar'
// import AboutUs from './components/AboutUs'
function App() {
    return (
        <>
      <NavBar />
          <Hero/>
          {/* <AboutUs /> */}
    <Footer />
    </>
  )

}

export default App
