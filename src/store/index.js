import { configureStore } from "@reduxjs/toolkit";
import shoppingPhoneReducer from "./../_pages/HomeTemplate/ShoppingPhonePage/duck/reducer";
import bookingTicketReducer from "./../_pages/HomeTemplate/HomePage/duck/reducer";

const store = configureStore({
  reducer: {
    shoppingPhoneReducer, // shoppingPhoneReducer: shoppingPhoneReducer
    bookingTicketReducer, // bookingTicketReducer: bookingTicketReducer
  },
});

export default store;
