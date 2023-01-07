import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        cartTotal: 0,
        cartQuantity: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            const { id, name, price, image, quantity } = action.payload;
            const item = {
                id,
                name,
                price,
                image,
                quantity,
            };
            state.cart.push(item);
            state.cartQuantity += 1;
            state.cartTotal += price;
        },
        removeFromCart: (state, action) => {
            const { id } = action.payload;
            const item = state.cart.find(item => item.id === id);
            const indexOfItem = state.cart.find(item => item.id !== id);
            state.cart.splice(indexOfItem, 1);
            state.cartQuantity -= 1;
            state.cartTotal -= item.price;
        }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice;