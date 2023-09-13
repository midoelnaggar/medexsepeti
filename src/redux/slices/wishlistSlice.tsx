import { createSlice } from "@reduxjs/toolkit";
import { wishlistInitialState } from "../../../custom";

const initialState: wishlistInitialState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromWishlist: (state, action) => {
      console.log(action.payload)
      const filteredItems = state.items.filter((item) => item != action.payload);
      state.items = filteredItems
    },
  },
});

export default wishlistSlice;
