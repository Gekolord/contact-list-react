import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';

const selectAllContacts = (state: RootState) => state.contacts;
// получает строку, возвращает список контактов по имени, начинающихся с данной строки
export const selectContactsByName = createSelector(
    [selectAllContacts, (state, name) => name],
    (items, name) => {
        if (!name || !name[0].toUpperCase()) return [];
        const firstLetter = name[0].toUpperCase();
        const arrayByLetter = items[firstLetter] || [];
        return arrayByLetter.filter((contact) =>
            contact.name.toLowerCase().startsWith(name.toLowerCase())
        );
    }
);
