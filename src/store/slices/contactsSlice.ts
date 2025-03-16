import { createSlice } from '@reduxjs/toolkit';
import { testObject } from '../../data/contactData';
const initialState = testObject;
const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        contactAdded(state, action) {
            const { key, contact } = action.payload;
            contact.id = crypto.randomUUID();
            state[key].push(contact);
        },
        contactRemoved(state, action) {
            const { key, id } = action.payload;
            state[key] = state[key].filter((contact) => contact.id !== id);
        },
        contactAllCleared(state, action) {
            const { allContacts } = action.payload;
            for (const key in allContacts) {
                if (Array.isArray(allContacts[key])) {
                    allContacts[key] = [];
                }
            }
        },
        contactEdited(state, action) {
            const { oldContactKey, oldContactId, newContactKey, newContact } =
                action.payload;
            contactsSlice.caseReducers.contactRemoved(state, {
                type: 'contacts/contactRemoved',
                payload: { key: oldContactKey, id: oldContactId },
            });
            contactsSlice.caseReducers.contactAdded(state, {
                type: 'contacts/contactAdded',
                payload: { key: newContactKey, contact: newContact },
            });
        },
    },
});
export const {
    contactAdded,
    contactRemoved,
    contactAllCleared,
    contactEdited,
} = contactsSlice.actions;
export default contactsSlice.reducer;
