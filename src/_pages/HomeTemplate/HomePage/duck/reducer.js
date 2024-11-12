import data from "./../danhSachGhe.json";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listSeat: data,
  listSeatSelected: [],
};

const bookingTicketReducer = createSlice({
  name: "bookingTicketReducer",
  initialState,
  reducers: {
    setBookingSeat: (state, action) => {
      const { payload } = action;

      // Tim vi tri ghe trong mang listSeatSelected
      const index = state.listSeatSelected.findIndex(
        (seat) => seat.soGhe === payload.soGhe
      );

      if (index !== -1) {
        // Xoa ghe khoi mang
        state.listSeatSelected.splice(index, 1);
      } else {
        // Them ghe vao mang
        state.listSeatSelected.push(payload);
      }
    },
  },
});

export const { setBookingSeat } = bookingTicketReducer.actions;

export default bookingTicketReducer.reducer;
