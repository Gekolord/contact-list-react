import { Button } from 'antd';
import { Input } from 'antd';
import { Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import ContactList from './ContactList';
import getContactArrayByName from '../helpers/getContactArrayByName';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Contact } from '../data/contactData';

export default function SearchContact() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const allContacts = useSelector((state: RootState) => state.contacts);
    const [searchedContactArray, setSearchedContactArray] = useState<Contact[]>(
        []
    );
    const handleClick = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
        setInputValue('');
        setSearchedContactArray([]);
    };
    const [inputValue, setInputValue] = useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);
        if (value) {
            const keyForArray = value[0].toUpperCase();
            if (allContacts[keyForArray]) {
                setSearchedContactArray([
                    ...getContactArrayByName(allContacts[keyForArray], value),
                ]);
            } else {
                setSearchedContactArray([]);
            }
        } else {
            setSearchedContactArray([]);
        }
    };
    useEffect(() => {
        console.log(searchedContactArray);
    }, [searchedContactArray]);
    return (
        <div>
            {/* @ts-expect-error тс ругается по непонятной причине*/}
            <Button onClick={handleClick}>Search</Button>
            {/* @ts-expect-error тс ругается по непонятной причине */}
            <Modal
                open={isModalOpen}
                footer={null}
                onCancel={handleCancel}
                width={'50%'}
                title="Search..."
            >
                <Input
                    placeholder="Name..."
                    // @ts-expect-error тс ругается по непонятной причине
                    onChange={handleChange}
                    value={inputValue}
                />
                <ContactList contactArray={searchedContactArray} />
            </Modal>
        </div>
    );
}
