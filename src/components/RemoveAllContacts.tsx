import { Button, message, Popconfirm } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { contactAllCleared } from '../store/slices/contactsSlice';
import type { PopconfirmProps } from 'antd';
export default function RemoveAllContacts() {
    const handleCancel: PopconfirmProps['onCancel'] = () => {
        message.error('Canceled');
    };
    const dispatch = useDispatch();
    const handleOk: PopconfirmProps['onConfirm'] = () => {
        dispatch(contactAllCleared());
        message.success('All contacts removed!');
    };
    return (
        <div>
            {/* @ts-expect-error тс ругается по непонятной причине */}
            <Popconfirm
                title="Remove all contacts"
                description="Are you sure you want to remove all contacts?"
                onConfirm={handleOk}
                onCancel={handleCancel}
            >
                {/*@ts-expect-error тс ругается по непонятной причине* */}
                <Button color={'danger'} variant={'solid'}>
                    Remove All
                </Button>
            </Popconfirm>
        </div>
    );
}
