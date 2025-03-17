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
    const handleFinish = (newContact: Contact, oldContact: Contact) => {
        const oldContactKey = oldContact.name[0].toUpperCase();
        const oldContactId = oldContact.id;
        const newContactKey = newContact.name[0].toUpperCase();
        dispatch(
            contactEdited({
                oldContactKey,
                oldContactId,
                newContactKey,
                newContact,
            })
        );
        setIsModalOpen(false);
    };
    if (contactArray.length === 0) {
        return <Text type="secondary">No contacts by this letter.</Text>;
    }
    return (
        <>
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
                            formName={`Edit Contact ${contact.name}`}
                            onFinish={(newContact: Contact) => {
                                handleFinish(newContact, contact);
                            }}
                        />
                    </List.Item>
                )}
            />
        </>
    );
}
