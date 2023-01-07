import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromCart } from '../features/store/cartSlice';

const Cart = () => {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const removeProductFromCart = (product) => {
        dispatch(removeFromCart(product))
    }

    console.log("cart", cart);

    return (
        <div>
            <h1>Cart</h1>
            <p>Total: ${cart.cartTotal}</p>
            <div>
                {
                    cart.cart.map((product, idx) => (
                        <div key={idx}>
                            <h3>{product.title}</h3>
                            <img src={product.image} alt={product.name} style={{ height: "200px", width: "200px" }} />
                            <p>${product.price}</p>
                            <button onClick={() => removeProductFromCart(product)}>Remove</button>
                        </div>
                    ))
                }
            </div>
            <button onClick={() => navigate('/payment')}>Checkout</button>
        </div>

    )
}

export default Cart;