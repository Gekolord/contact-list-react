import { Button } from 'antd';
import { Input } from 'antd';
import { Modal } from 'antd';
import React, { useState } from 'react';
import ContactList from './ContactList';
import getContactArrayByName from '../helpers/getContactArrayByName';

export default function SearchContact() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleClick = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const [inputValue, setInputValue] = useState('');
    const handleChange = (value: string) => {
        console.log(value);
        setInputValue(value);
    };

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
                    onChange={(event) => handleChange(event.target.value)}
                    value={inputValue}
                />
            </Modal>
        </div>
    );
}
