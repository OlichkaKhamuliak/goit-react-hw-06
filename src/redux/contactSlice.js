import { createAction, createReducer } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/addContact");
export const deleteContact = createAction("contacts/deleteContact");

const initialState = {
  items: [],
};

export const contactsReduser = createReducer(initialState, (builder) => {
  builder
    .addCase(addContact, (state, action) => {
      state.items.push(action.payload);
    })
    .addCase(deleteContact, (state, action) => {
      const updatedItems = state.items.filter(
        (contact) => contact.id !== action.payload
      );
      state.items = updatedItems;
    });
});
