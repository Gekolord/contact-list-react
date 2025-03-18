import { Button } from 'antd';
import { Input } from 'antd';
import { Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import ContactList from './ContactList';
import { useSelector } from 'react-redux';
import { selectContactsByName } from '../store/slices/selectors/selectItemsByName';

export default function SearchContact() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleClick = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
        setInputValue('');
    };
    const [inputValue, setInputValue] = useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);
    };
    const searchedContactArray = useSelector((state) => {
        return selectContactsByName(state, inputValue);
    });
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
