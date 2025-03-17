import React from 'react';
import ContactList from './ContactList';
import { Collapse } from 'antd';
import { Contact } from '../data/contactData';

type CollapseListParams = {
    dataKey: string;
    dataArray: Contact[];
};
// Сворачивающийся компонент со списком контактов в виде массива внутри
export default function CollapseContactList({
    dataKey,
    dataArray,
}: CollapseListParams) {
    return (
        <Collapse
            // @ts-expect-error потому что тс думает, что у collapse нет атрибута size
            size="small"
            items={[
                {
                    key: dataKey,
                    label: `${dataKey} - ${dataArray.length}`,
                    children: (
                        <ContactList
                            contactArray={dataArray}
                            alphabetLetter={dataKey}
                        />
                    ),
                },
            ]}
        />
    );
}
