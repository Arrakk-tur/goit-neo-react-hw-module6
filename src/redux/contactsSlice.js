import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactsAdapter = createEntityAdapter();

const initialState = contactsAdapter.getInitialState();

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: {
      reducer: (state, action) => {
        contactsAdapter.addOne(state, action.payload);
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
      contactsAdapter.removeOne(state, action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const { selectAll: selectContacts, selectById: selectContactById } =
  contactsAdapter.getSelectors((state) => state.contacts);

export default contactsSlice.reducer;
