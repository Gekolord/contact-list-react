// Этот компонент отображает массив контактов
// @ts-expect-error потому что тс думает, что в antd нет такого компонента
import { Typography } from 'antd';
import List from 'antd/es/list';
import React, { useState } from 'react';
import { Contact } from '../data/contactData';
import { useDispatch } from 'react-redux';
import { contactEdited, contactRemoved } from '../store/slices/contactsSlice';
import ContactFormModal from './ContactFormModal';
const { Text } = Typography;
type ContactListProps = {
    contactArray: Contact[];
    alphabetLetter: string;
};
export default function ContactList({
    contactArray,
    alphabetLetter,
}: ContactListProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();
    const handleClick = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
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
                                <a onClick={handleClick} key="contact-edit">
                                    edit
                                </a>,
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
                            <ContactFormModal
                                oldContact={contact}
                                onCancel={handleCancel}
                                isOpen={isModalOpen}
                                formName="Edit Form"
                                onFinish={(newContact: Contact) => {
                                    const oldContactKey =
                                        contact.name[0].toUpperCase();
                                    const oldContactId = contact.id;
                                    const newContactKey =
                                        newContact.name[0].toUpperCase();
                                    dispatch(
                                        contactEdited({
                                            oldContactKey,
                                            oldContactId,
                                            newContactKey,
                                            newContact,
                                        })
                                    );
                                }}
                            />
                        </List.Item>
                    )}
                />
            )}
        </>
    );
}
