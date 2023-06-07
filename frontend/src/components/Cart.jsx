import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
                    totalPrice: item.price
                }))

                setData(initialData)
                calculateTotalPrice(initialData)
            })
            .catch((error) => {
                // Handle errors
                console.error('Error fetching cart data:', error)
            })
    }, [])

    const updateCart = (productId, action) => {
        const updatedData = data.map((item) => {
            if (item.id === productId) {
                let newQuantity = item.quantity
                if (action === 'increase') {
                    newQuantity = item.quantity + 1
                } else if (action === 'decrease' && item.quantity > 1) {
                    newQuantity = item.quantity - 1
                }

                const newPrice = item.price * newQuantity
                return {
                    ...item,
                    quantity: newQuantity,
                    totalPrice: newPrice
                }
            }
            return item
        })

        setData(updatedData)
        calculateTotalPrice(updatedData)
    }

    const removeFromCart = (id) => {
        axios
            .delete(`http://localhost:3000/cart/${id}`)
            .then((response) => {
                if (response.status === 200) {
                    const updatedData = data.filter((item) => item.id !== id)
                    setData(updatedData)
                    calculateTotalPrice(updatedData) // Pass updatedData as an argument
                }
            })
            .catch((error) => {
                console.error('Error in removing item:', error)
            })
    }

    const calculateTotalPrice = (cartData) => {
        const totalPrice = cartData.reduce(
            (total, item) => total + item.totalPrice,
            0
        )
        setTotalPrice(totalPrice)
    }

    return (
        <div id="cart_container">
            <h1>Shopping cart</h1>
            <div id="cart-products">
                {data.map((item) => (
                    <div key={item.id} id="cart-product">
                        <img
                            src={item.image}
                            alt={item.model}
                            id="cart-product-image"
                        />
                        <div id="item-info">
                            <h3>{item.model}</h3>
                            <p>{item.price}</p>
                            <div>
                                <div id="decrease-increase">
                                    <div id="btns">
                                        <button
                                            onClick={() =>
                                                updateCart(item.id, 'decrease')
                                            }
                                        >
                                            -
                                        </button>

                                        <button
                                            onClick={() =>
                                                updateCart(item.id, 'increase')
                                            }
                                        >
                                            +
                                        </button>
                                    </div>

                                    <span className="quantity">
                                        {item.quantity}
                                    </span>
                                    <button
                                        id="remove-button"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        {' '}
                                        Remove{' '}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <p>Total price: ${totalPrice}</p>
                <Link to="/billing">
                <button id="checkout">Checkout</button></Link>
            </div>
        </div>
    )
}

export default Cart
