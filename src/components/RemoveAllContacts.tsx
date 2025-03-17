import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { contactAllCleared } from '../store/slices/contactsSlice';

export default function RemoveAllContacts() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleClick = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const dispatch = useDispatch();
    const handleOk = () => {
        dispatch(contactAllCleared());
        setIsModalOpen(false);
    };
    return (
        <div>
            {/*@ts-expect-error тс ругается по непонятной причине* */}
            <Button color={'danger'} variant={'solid'} onClick={handleClick}>
                Remove All
            </Button>

            <Modal
                title="Are you sure?"
                // @ts-expect-error тс ругается по непонятной причине
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            ></Modal>
        </div>
    );
}
