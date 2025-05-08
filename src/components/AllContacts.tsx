import React from 'react';
import CollapseContactList from './CollapseContactList';
import { useAppSelector } from '../hooks/redux';
import { isAlphabet } from '../typeGuards/isAlphabet';
export default function AllContacts() {
    const allContacts = useAppSelector((state) => state.contactsReducer);
    return (
        <>
            {Object.keys(allContacts).map((key) => {
                if (isAlphabet(key)) {
                    return (
                        <CollapseContactList
                            dataArray={allContacts[key]}
                            dataKey={key}
                        />
                    );
                } else throw `Ключ объекта ${key} не является валидным ключом.`;
            })}
        </>
    );
}
