
import headphone from "../assets/images/headphone.jpg";


function Hero () {
    return (


            <div className="hero-container" id="hero-container">

                <div className="hero-image" id="hero-image">
 <img src={headphone} alt="headphone " />
</div>
                <div className="hero-text">
                    <div>

                    <h3 > <span>Empowering your world,</span> one <br />
                        device at a time</h3>
                    <p>Where Quality Meets Innovation. <br />
Your Destination for High-Tech Wonders.</p>
</div>

                    <div id="hero-button"
                     >

                        <button>Buy</button>
  </div>
                </div>

                </div>





    )
}
export default Hero;
