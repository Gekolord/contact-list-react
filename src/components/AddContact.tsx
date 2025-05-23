import React, { useState } from 'react';
import { Button } from 'antd';
import ContactFormModal from './ContactFormModal';
import { Contact } from '../data/contactData';
import { contactAdded } from '../store/slices/contactsSlice';
import { useAppDispatch } from '../hooks/redux';
export default function AddContact() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleClick = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const dispatch = useAppDispatch();
    const handleAdded = (contact: Contact) => {
        const key = contact.name[0].toUpperCase();
        dispatch(contactAdded({ key, contact }));
        setIsModalOpen(false);
    };
    return (
        <>
            {/*@ts-expect-error тс ругается по непонятной причине* */}
            <Button type={'primary'} onClick={handleClick}>
                Add
            </Button>
            <ContactFormModal
                isOpen={isModalOpen}
                onCancel={handleCancel}
                formName="Add Contact"
                onFinish={handleAdded}
            />
        </>
    );
}
