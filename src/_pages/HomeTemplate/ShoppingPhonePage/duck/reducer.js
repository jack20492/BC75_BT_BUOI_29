import data from "./../data.json";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  phones: data,
  phoneDetail: data[0],
  carts: [],
};

const _findIndex = (carts, maSP) => {
  const index = carts.findIndex((item) => item.maSP === maSP);
  return index;
};

const shoppingPhoneReducer = createSlice({
  name: "shoppingPhoneReducer",
  initialState,
  reducers: {
    setPhoneDetail: (state, action) => {
      console.log("action", action);
      // cap nhat lai state => phoneDetail
      const { payload } = action;
      state.phoneDetail = payload;
    },

    setPhoneAddToCart: (state, action) => {
      const { payload } = action;
      const newCarts = [...state.carts]; // spread operator

      // tạo object mới từ data
      const phoneAddToCart = {
        ...payload,
        soLuong: 1,
      };

      const index = _findIndex(newCarts, phoneAddToCart.maSP);

      if (index !== -1) {
        newCarts[index].soLuong += 1;
      } else {
        newCarts.push(phoneAddToCart);
      }

      state.carts = newCarts;
    },

    setUpdateQty: (state, action) => {
      console.log("action", action);
      const { payload } = action;
      const newCarts = [...state.carts];
      const index = _findIndex(newCarts, payload.maSP);

      if (index !== -1) {
        if (payload.status) {
          // tăng số lượng
          newCarts[index].soLuong += 1;
        } else {
          // giảm số lượng
          if (newCarts[index].soLuong > 1) {
            newCarts[index].soLuong -= 1;
          } else {
            newCarts.splice(index, 1);
          }
        }
      }
      state.carts = newCarts;
    },
  },
});

export const { setPhoneDetail, setPhoneAddToCart, setUpdateQty } =
  shoppingPhoneReducer.actions;

export default shoppingPhoneReducer.reducer;
