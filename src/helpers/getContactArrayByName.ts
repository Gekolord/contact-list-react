import { Contact } from '../data/contactData';

export default function getContactArrayByName(arr: Contact[], name: string) {
    return arr.filter((contact) => contact.name.startsWith(name));
}
