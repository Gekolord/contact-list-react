import React, {createContext, useState, ReactNode} from 'react'
import { allContactData } from '../data/contactData'
import { Contact } from '../data/contactData'
type ComponentProps = {
    children: ReactNode;
}
const dataContext = createContext(allContactData)
export default function ContactDataContextProvider({children}: ComponentProps) {
    const [contactsData, setContactsData] = useState(allContactData)

    const removeContact = (key: string, id: string) => {
        setContactsData((prevContactsData) => ({
            ...prevContactsData,
            [key]: prevContactsData[key].filter((contacts) => contacts.id !== id)
        }))
    }

    const addContact = (key: string, contact: Contact) => {
        setContactsData((prevContactsData) => ({
            ...prevContactsData,
            [key]: [...prevContactsData[key], contact]
        }))
    }
    return (
        <dataContext.Provider value={contactsData}>

        </dataContext.Provider>
    )
}
