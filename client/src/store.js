import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./features/store/categories-api";
import cartSlice from "./features/store/cartSlice";

const store = configureStore({
    reducer: {
        [categoriesSlice.reducerPath]: categoriesSlice.reducer,
        cart: cartSlice.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(categoriesSlice.middleware),
})

export default store;