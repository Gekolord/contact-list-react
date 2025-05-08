import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { isAlphabet } from '../../typeGuards/isAlphabet';

const selectContactsState = (state: RootState) => state.contactsReducer;
// получает строку, возвращает список контактов по имени, начинающихся с данной строки
export const selectContactsByName = createSelector(
    [selectContactsState, (state, name) => name],
    (items, name: string) => {
        if (!name || !name[0].toUpperCase()) return [];
        const firstLetter = name[0].toUpperCase();
        if (isAlphabet(firstLetter)) {
            const arrayByLetter = items[firstLetter] || [];
            return arrayByLetter.filter((contact) =>
                contact.name.toLowerCase().startsWith(name.toLowerCase())
            );
        } else
            throw `Строка ${firstLetter} не является валидным ключом для объекта`;
    }
);
