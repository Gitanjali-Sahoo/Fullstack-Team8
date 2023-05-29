import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'
// import Hero from './components/Hero'
import Products from './components/Products'
import SigninForm from './components/SigninForm'
import SignupForm from './components/SignupForm'

function App() {
    return (
        <>
            {/* <Hero /> */}

            <Products />
            <SigninForm />
            <SignupForm />
            <Footer />
        </>
    )
}

export default App
