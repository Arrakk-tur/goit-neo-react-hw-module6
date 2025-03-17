import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { REHYDRATE } from "redux-persist";

const contactsAdapter = createEntityAdapter();

const initialState = {
  items: contactsAdapter.getInitialState(),
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: {
      reducer: (state, action) => {
        contactsAdapter.addOne(state.items, action.payload);
      },
      prepare: (contact) => {
        return {
          payload: {
            id: nanoid(),
            ...contact,
          },
        };
      },
    },
    deleteContact: (state, action) => {
      contactsAdapter.removeOne(state.items, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(REHYDRATE, (state, action) => {
      if (action.payload?.contacts?.items) {
        contactsAdapter.getSelectors.apply(state.items);
        // contactsAdapter.removeAll(state.items);
        contactsAdapter.setAll(
          state.items,
          Object.values(action.payload.contacts.items.entities)
        );
      }
    });
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const { selectAll: selectContacts, selectById: selectContactById } =
  contactsAdapter.getSelectors((state) => state.contacts.items);

export default contactsSlice.reducer;
