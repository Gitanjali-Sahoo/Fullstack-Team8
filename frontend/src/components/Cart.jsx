//import the headphone image
import headphone from "../assets/images/headphone.jpg";

const Cart = () => {
  return (
      <div id="container">
<h3>Shopping cart</h3>
          <div id="cart-container">
              <div>
 <img src={headphone} alt="" />
              </div>

              <div>
                  <h4> title</h4>
                  <p>price</p>
 <div id="cart-btn">  <button > Qyt: 1</button>
                  <button id="checkout">Checkout</button></div>
              </div>



</div>

    </div>
  )
}

export default Cart
