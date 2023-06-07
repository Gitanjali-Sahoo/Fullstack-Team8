import headphone from '../assets/images/headphone.jpg'
import { Link } from 'react-router-dom'
function Hero() {
    return (
        <div className="hero-container" id="hero-container">
            <div className="hero-image" id="hero-image">
                <img src={headphone} alt="headphone " />
            </div>
            <div className="hero-text">
                <div>
                    <h3>
                        {' '}
                        <span>Empowering your world,</span> one <br />
                        device at a time
                    </h3>
                    <p>
                        Where Quality Meets Innovation. <br />
                        Your Destination for High-Tech Wonders.
                    </p>
                </div>
                <Link to="/searchproduct">

<div id="hero-button">
                    <button>Buy</button>
                </div>
</Link>

            </div>
        </div>
    )
}
export default Hero
