import { configureStore } from "@reduxjs/toolkit";
import appointmentReducer from "./reducers";

const store = configureStore({
  reducer: {
    appointments: appointmentReducer,
  },
});

export default store;
