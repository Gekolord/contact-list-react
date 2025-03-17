import React from 'react';
import CollapseContactList from './CollapseContactList';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
export default function AllContacts() {
    const allContacts = useSelector((state: RootState) => state.contacts);
    return (
        <>
            {Object.keys(allContacts).map((key: string) => {
                return (
                    <CollapseContactList
                        dataArray={allContacts[key]}
                        dataKey={key}
                    />
                );
            })}
        </>
    );
}
