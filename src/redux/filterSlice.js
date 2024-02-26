import { createAction, createReducer } from "@reduxjs/toolkit";

export const setFilter = createAction("filters/setFilter");

export const initialState = {
  name: "",
};

export const filtersReduser = createReducer(initialState, (builder) => {
  builder.addCase(setFilter, (state, action) => {
    state.name = action.payload;
  });
});
