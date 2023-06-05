
import { useEffect, useState } from "react";
import axios from "axios";


const Cart = () => {
    const [data, setData] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        axios
            .get('http://localhost:3000/cart')
            .then((response) => {
                const initialData = response.data.map((item) => ({
                    ...item,
                    quantity: 1,
                    totalPrice: item.price,
                }));

                setData(initialData)
                calculateTotalPrice(initialData);

            })
            .catch((error) => {
                // Handle errors
                console.error('Error fetching cart data:', error)
            });

    }, []);

   const updateCart = (productId, action) => {
       const updatedData = data.map((item) => {
           if (item.id === productId) {
               let newQuantity = item.quantity;
               if (action === 'increase') {
                   newQuantity = item.quantity + 1;
               } else if (action === 'decrease' && item.quantity > 1) {
                   newQuantity = item.quantity - 1;
               }



               const newPrice = item.price * newQuantity;
               return {
                   ...item,
                   quantity: newQuantity,
                   totalPrice: newPrice,
               };
           }
           return item;
       });



       setData(updatedData);
       calculateTotalPrice(updatedData);
    }

    const removeFromCart = (id) => {
        axios
            .delete(`http://localhost:3000/cart/${id}`)
            .then((response) => {
                if (response.status === 200) {
                    const updatedData = data.filter((item) => item.id !== id);
                    setData(updatedData)
                    calculateTotalPrice(updatedData); // Pass updatedData as an argument
                }
            })
            .catch((error) => {
                console.error('Error in removing item:', error)
            });
    };

    const calculateTotalPrice = (cartData) => {
        const totalPrice = cartData.reduce(
            (total, item) => total + item.totalPrice,
            0
        );
        setTotalPrice(totalPrice)
    };

    return (
          <div id="cart_container">
      <h1>Shopping cart</h1>
      <div id="cart-products">
      {data.map((item) => (
  <div key={item.id} id="cart-product">
    <img src={item.image} alt={item.model} id="cart-product-image" />
    <div id="item-info">
      <h3>{item.model}</h3>
                  <p>{ item.price}</p>
                  <div >

        <div id="decrease-increase">
                          <div id="btns">
                              <button onClick={() =>
                                        updateCart(item.id, 'decrease')
                                    } >
                                    -
                          </button>

                           <button
                                    onClick={() =>
                                        updateCart(item.id, 'increase')
                                    }  >
                                    +
                          </button>

</div>

                                <span className="quantity">
                                    {item.quantity}
                                </span><button
                                   id="remove-button"
                                    onClick={() => removeFromCart(item.id)}
                                > Remove  </button>
</div>
                  </div>

              </div>

          </div>


      ))}


          </div>
          <div>

              <p>Total price: ${totalPrice}</p>
               <button id="checkout">Checkout</button>
          </div>


      </div>


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































/*
import { useEffect, useState } from "react";
import axios from "axios";

const Cart = () => {
 const [cartproduct, setCartProduct] = useState([]);
 const [prices, setPrices] = useState([]);
const [quantities, setQuantities] = useState([]);
const [totalPrice, setTotalPrice] = useState(0);



  useEffect(() => {
    const fetchCartProducts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/cart");
          setCartProduct(res.data);
    // Extract the prices and quantities from the response and set them in the states
    const productPrices = res.data.map((item) => item.price);
    setPrices(productPrices);

    const productQuantities = res.data.map((item) => item.quantity);
          setQuantities(productQuantities);
          if (productPrices.length === productQuantities.length) {
       const calculatedTotalPrice = productPrices.reduce((acc, price, index) => {
      return acc + price * productQuantities[index];
       }, 0);
                setTotalPrice(calculatedTotalPrice);
 }



      } catch (err) {
        console.log(err);
        }

    };

      fetchCartProducts();


  }, []);













const handlePriceAndQuantityChange = (index, operation) => {
  const updatedPrices = [...prices];
  const updatedQuantities = [...quantities];

    if (operation === "+") {
      //function to dubble the price
        updatedPrices[index] *= 2;
        // Increase the products by one when + button is  clicked on
    updatedQuantities[index] += 1;
    } else if (operation === "-") {
        // Half of the price
        updatedPrices[index] /= 2;
        // Decrease the products by one when - button is clicked on
    updatedQuantities[index] -= 1;
  }

  setPrices(updatedPrices);
    setQuantities(updatedQuantities);

setTotalPrice(updatedPrices)


};







  const handleDeleteproduct = (index) => {
    const updatedCartProducts = [...cartproduct];
    const updatedPrices = [...prices];
    const updatedQuantities = [...quantities];
// Deleting the whole product from cart
    updatedCartProducts.splice(index, 1);
    updatedPrices.splice(index, 1);
    updatedQuantities.splice(index, 1);

    setCartProduct(updatedCartProducts);
    setPrices(updatedPrices);
    setQuantities(updatedQuantities);

    // calculate the price again, including updated item quantity
    if (updatedPrices.length === updatedQuantities.length) {
      const calculatedTotalPrice = updatedPrices.reduce((acc, price, index) => {
        return acc + price * updatedQuantities[index];
      }, 0);
      setTotalPrice(calculatedTotalPrice);
    }
  };







  return (
    <div id="cart_container">
      <h1>Shopping cart</h1>
      <div className="cart-products">
      {cartproduct.map((item, index) => (
  <div key={item.id} className="cart-product">
    <img src={item.image} alt={item.model} className="cart-product-image" />
    <div id="item-info">
      <h3>{item.model}</h3>
      <p>{prices[index]} kr</p>
                  <p>Qyt: {quantities[index] }</p>
                  <div className="btns">
                      <button id="delete" onClick={() => handleDeleteproduct(index)}>Delete</button>


        <div id="decrease-increase">
          <button onClick={() => handlePriceAndQuantityChange(index, "+")}>+</button>
                          <button onClick={() => handlePriceAndQuantityChange(index, "-")}>-</button>


        </div>
                  </div>

              </div>

          </div>


      ))}


          </div>
          <div>

              <p>Subtotal : {totalPrice} kr</p>
               <button id="">Checkout</button>
          </div>


      </div>

  );
};

export default Cart;






<div>
            <Title>Shopping cart</Title>

            <CartContainer>
                {data.map((laptop) => (
                    <CartWrapper key={laptop.id}>
                        <ProductImage>
                            <img src={`/image/${laptop.image}`} alt="" />
                        </ProductImage>

                        <ProductDetails>
                            <ProductTitle>{laptop.model}</ProductTitle>
                            <ProductPrice>
                                Price: ${laptop.totalPrice}
                            </ProductPrice>
                            <QuantityControls>
                                <button
                                    onClick={() =>
                                        updateCart(laptop.id, 'decrease')
                                    }
                                >
                                    -
                                </button>
                                <span className="quantity">
                                    {laptop.quantity}
                                </span>
                                <button
                                    onClick={() =>
                                        updateCart(laptop.id, 'increase')
                                    }
                                >
                                    +
                                </button>
                                <button
                                    className="remove-button"
                                    onClick={() => removeFromCart(laptop.id)}
                                >
                                    Remove
                                </button>
                            </QuantityControls>
                        </ProductDetails>
                    </CartWrapper>
                ))}
                <CheckoutWrapper>
                    <TotalPrice>Total price: ${totalPrice}</TotalPrice>
                    <CheckoutButton>Checkout</CheckoutButton>
                </CheckoutWrapper>
            </CartContainer>
        </div>
 */
