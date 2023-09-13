import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./slices/wishlistSlice";

const store = configureStore({
  reducer: {
    wishlist: wishlistSlice.reducer,
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions

export default store;
