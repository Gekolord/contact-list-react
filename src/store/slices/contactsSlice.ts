import { createSlice } from '@reduxjs/toolkit';
import { allContactData, Contact } from '../../data/contactData';
const initialState = allContactData;
const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        contactAdded(state, action) {
            const { key, contact } = action.payload;
            if (state[key]) {
                const id = crypto.randomUUID();
                contact.id = id;
                localStorage.setItem(id, JSON.stringify(contact));
                state[key].push(contact);
            }
        },
        contactRemoved(state, action) {
            const { key, id } = action.payload;
            state[key] = state[key].filter((contact) => contact.id !== id);
            localStorage.removeItem(id);
        },
        contactAllCleared(state) {
            for (const key in state) {
                if (Array.isArray(state[key])) {
                    state[key] = [];
                }
            }
            localStorage.clear();
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
        contactLoaded(state) {
            const localStorageKeys = Object.keys(localStorage);
            for (const key of localStorageKeys) {
                const stringifiedContact = localStorage.getItem(key);
                if (stringifiedContact) {
                    const contact: Contact = JSON.parse(stringifiedContact);
                    const stateKey = contact.name[0].toUpperCase();
                    state[stateKey].push(contact);
                }
            }
        },
    },
});
export const {
    contactAdded,
    contactRemoved,
    contactAllCleared,
    contactEdited,
    contactLoaded,
} = contactsSlice.actions;
export default contactsSlice.reducer;
