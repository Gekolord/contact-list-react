// Этот компонент отображает массив контактов
// @ts-expect-error потому что тс думает, что в antd нет такого компонента
import { Typography } from 'antd';
import List from 'antd/es/list';
import React from 'react';
import { Contact } from '../data/contactData';
import { useDispatch } from 'react-redux';
import { contactRemoved } from '../store/slices/contactsSlice';
const { Text } = Typography;
type ContactListProps = {
    contactArray: Contact[];
    alphabetLetter: string;
};
export default function ContactList({
    contactArray,
    alphabetLetter,
}: ContactListProps) {
    const dispatch = useDispatch();
    const handleRemove = (key: string, id: string) => {
        dispatch(contactRemoved({ key, id }));
    };
    return (
        <>
            {contactArray.length === 0 ? (
                <Text type="secondary">No contacts by this letter.</Text>
            ) : (
                <List
                    dataSource={contactArray}
                    renderItem={(contact: Contact) => (
                        <List.Item
                            actions={[
                                <a key="contact-edit">edit</a>,
                                <a
                                    onClick={() =>
                                        handleRemove(alphabetLetter, contact.id)
                                    }
                                    key="contact-remove"
                                >
                                    remove
                                </a>,
                            ]}
                        >
                            <List.Item.Meta
                                title={contact.name}
                                description={
                                    <>
                                        <div>Vacancy: {contact.vacancy}</div>
                                        <div>Phone: {contact.phone}</div>
                                    </>
                                }
                            />
                        </List.Item>
                    )}
                />
            )}
        </>
    );
}
