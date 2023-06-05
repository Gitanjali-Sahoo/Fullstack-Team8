//import the headphone image
import headphone from '../assets/images/headphone.jpg'
import { Link } from 'react-router-dom'

const Cart = () => {
    return (
        <div id="container">
            <h3>Shopping cart</h3>

            <div id="cart-container">
                <div>
                    <img src={headphone} alt="" />
                </div>

                <div>
                    <h4> laptop.model</h4>
                    <p>price</p>
                    <div id="cart-btn">
                        {' '}
                        <button> Qyt: 1</button>
                        <Link to="/billing">
                            <button id="checkout">Checkout</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
