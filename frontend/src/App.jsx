import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Hero from './components/Hero'

function App() {
    const [showHero, setShowHero] = useState(true)

    const handleIconClicked = () => {
        setShowHero(false)
    }

    return (
        <>
            <NavBar onIconClicked={handleIconClicked} />
            {showHero && <Hero />}
            <Footer />
        </>
    )
}

export default App
