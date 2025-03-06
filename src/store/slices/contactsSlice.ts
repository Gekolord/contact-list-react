import { createSlice } from '@reduxjs/toolkit';
import { testObject } from '../../data/contactData';
const initialState = testObject;
const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        contactAdded(state, action) {
            const { key, contact } = action.payload;
            state[key].push(contact);
        },
        contactRemoved(state, action) {
            const { key, id } = action.payload;
            state[key] = state[key].filter((contact) => contact.id !== id);
        },
    },
});
export const { contactAdded, contactRemoved } = contactsSlice.actions;
export default contactsSlice.reducer;
