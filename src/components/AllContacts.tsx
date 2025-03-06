import React from 'react';
import CollapseContactList from './CollapseContactList';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
export default function AllContacts() {
    const testObject = useSelector((state: RootState) => state.contacts);
    return (
        <>
            {Object.keys(testObject).map((key: string) => {
                return (
                    <CollapseContactList
                        dataArray={testObject[key]}
                        dataKey={key}
                    />
                );
            })}
        </>
    );
}
