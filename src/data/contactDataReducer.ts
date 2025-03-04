import { configureStore, UnknownAction } from "@reduxjs/toolkit";
import { allContactData, Contact } from "./contactData";
interface AddContactAction {
    type: "ADD_CONTACT";
    payload: {key: string, contact: Contact}
}
interface RemoveContactAction {
    type: "REMOVE_CONTACT";
    payload: {key: string, id: string}
}
type ReducerActions = AddContactAction | RemoveContactAction
export const reducer = (state = allContactData, action: ReducerActions) => {
    switch (action.type) {
        case "ADD_CONTACT": {
            const {key, contact} = action.payload
            return {...state, [key]: [...state[key], contact]}
        }
        case "REMOVE_CONTACT": {
            const {key, id} = action.payload
            return {...state, [key]: state[key].filter((contact) => contact.id !== id)}
        }
        default: 
            return state
    }
}

export const store = configureStore({
    reducer: reducer,
})