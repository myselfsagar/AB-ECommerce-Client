import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload.attributes;
      const curItem = product
        ? {
            title: product.title,
            key: product.key,
            price: product.price,
            image: product.image.data.attributes.url,
          }
        : action.payload;

      const index = state.cart.findIndex((item) => item.key === curItem.key);

      if (index === -1) {
        state.cart.push({ ...curItem, quantity: 1 });
      } else {
        state.cart[index].quantity += 1;
      }
    },
    removeFromCart: (state, action) => {
      const curItemKey = action.payload?.attributes?.key || action.payload.key;
      const index = state.cart.findIndex((item) => item.key === curItemKey);

      if (index === -1) return;

      if (state.cart[index].quantity === 1) {
        state.cart = state.cart.filter((item) => item.key !== curItemKey);
      } else {
        state.cart[index].quantity -= 1;
      }
    },
    deleteFromCart: (state, action) => {
      const curItemKey = action.payload?.key;
      const index = state.cart.findIndex((item) => item.key === curItemKey);
      state.cart = state.cart.filter((item) => item.key !== curItemKey);
    },
    resetCart: (state, action) => {
      state.cart = [];
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, deleteFromCart, resetCart } =
  cartSlice.actions;
