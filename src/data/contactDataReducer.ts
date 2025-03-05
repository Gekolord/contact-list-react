import { configureStore, createSlice, UnknownAction } from "@reduxjs/toolkit";
import { allContactData, Contact, testObject } from "./contactData";
const initialState = testObject;
const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        contactAdded(state, action) {
            const {key, contact} = action.payload
            return {...state, [key]: [...state[key], contact]}
        },
        contactRemoved(state, action) {
            const {key, id} = action.payload
            return {...state, [key]: state[key].filter((contact) => contact.id !== id)}
        }
    }
})
export const {contactAdded, contactRemoved} = contactsSlice.actions
export default contactsSlice.reducer

