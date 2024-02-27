import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    setFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;

// export const setFilter = createAction("filters/setFilter");

// export const initialState = {
//   name: "",
// };

// export const filtersReduser = createReducer(initialState, (builder) => {
//   builder.addCase(setFilter, (state, action) => {
//     state.name = action.payload;
//   });
// });
