import data from "../danhSachGhe.json";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listSeat: data,
  listSeatSelected: [],
};

const bookingTicketSlice = createSlice({
  name: "bookingTicket",
  initialState,
  reducers: {
    toggleSeatSelection: (state, action) => {
      const seatIndex = state.listSeatSelected.findIndex(
        (seat) => seat.soGhe === action.payload.soGhe
      );

      if (seatIndex !== -1) {
        state.listSeatSelected.splice(seatIndex, 1);
      } else {
        state.listSeatSelected.push(action.payload);
      }
    },
  },
});

export const { toggleSeatSelection } = bookingTicketSlice.actions;

export default bookingTicketSlice.reducer;
