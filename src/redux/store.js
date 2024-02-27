import { configureStore } from "@reduxjs/toolkit";
import { contactsReduser } from "./contactSlice";
import { filtersReducer } from "./filterSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filters: filtersReducer,
  },
});
