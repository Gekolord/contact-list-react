import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState, Alphabet, Contact } from '../../data/contactData';
import { isAlphabet } from '../../typeGuards/isAlphabet';
const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        contactAdded(
            state,
            action: PayloadAction<{ key: string; contact: Contact }>
        ) {
            const { key, contact } = action.payload;
            if (isAlphabet(key) && state[key]) {
                const id = crypto.randomUUID();
                contact.id = id;
                localStorage.setItem(id, JSON.stringify(contact));
                state[key].push(contact);
            } else
                throw `Строка ${key} не является валидным ключом для объекта`;
        },
        contactRemoved(
            state,
            action: PayloadAction<{ key: string; id: string }>
        ) {
            const { key, id } = action.payload;
            if (isAlphabet(key)) {
                state[key] = state[key].filter((contact) => contact.id !== id);
                localStorage.removeItem(id);
            } else
                throw `Строка ${key} не является валидным ключом для объекта`;
        },
        contactAllCleared(state) {
            for (const key in state) {
                if (isAlphabet(key)) {
                    if (Array.isArray(state[key])) {
                        state[key] = [];
                    }
                } else
                    throw `Строка ${key} не является валидным ключом для объекта`;
            }
            localStorage.clear();
        },
        contactEdited(
            state,
            action: PayloadAction<{
                oldContactKey: string;
                oldContactId: string;
                newContactKey: string;
                newContact: Contact;
            }>
        ) {
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
                    try {
                        const contact: Contact = JSON.parse(stringifiedContact);
                        const stateKey =
                            contact.name[0].toUpperCase() as Alphabet;
                        state[stateKey].push(contact);
                    } catch (error) {
                        console.log(
                            'Удален невалидный ключ из localstorage:',
                            key
                        );
                        localStorage.removeItem(key);
                    }
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
