import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

export const nameContact = (value) => {
  return {
    type: "contacts/addContact",
    payload: value,
  };
};

const contactsInitialState = {
  items: [],
};
const contactsReduser = (state = contactsInitialState, action) => {
  switch (action.type) {
    case "contacts/addContact":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "contacts/deleteContact":
      return {
        ...state,
        items: state.items.filter((contact) => contact.id !== action.payload),
      };

    default:
      return state;
  }
};
const filtersInitialState = {
  name: "",
};
const filtersReduser = (state = filtersInitialState, action) => {
  switch (action.type) {
    case "filters/setFilter":
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  contacts: contactsReduser,
  filters: filtersReduser,
});

export const store = createStore(rootReducer, devToolsEnhancer());
