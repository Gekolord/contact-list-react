import React, { useId } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import { useDispatch } from 'react-redux';
import { contactAdded } from '../store/slices/contactsSlice';
type FinishValuesType = {
    name: string;
    vacancy: string;
    phone: string;
};

export default function ContactForm() {
    const id = useId();
    const dispatch = useDispatch();
    const onFinish = (values: FinishValuesType) => {
        const key = values.name[0].toUpperCase();
        dispatch(contactAdded({ key, values }));
    };
    return (
        // @ts-expect-error непонятная ошибка от тса
        <Modal
            footer={[
                <Button >
                    Submit
                </Button>,
            ]}
        >
            {/* @ts-expect-error непонятная ошибка от тса */}
            <Form
                layout={'vertical'}
                onFinish={onFinish}
                autoComplete="off"
                id={id}
            >
                {/* @ts-expect-error непонятная ошибка от тса */}
                <Form.Item label="Name" name="name" required={true}>
                    {/* @ts-expect-error непонятная ошибка от тса */}
                    <Input />
                </Form.Item>
                {/* @ts-expect-error непонятная ошибка от тса */}
                <Form.Item label="Vacancy" name="vacancy" required={true}>
                    {/* @ts-expect-error непонятная ошибка от тса */}
                    <Input />
                </Form.Item>
                {/* @ts-expect-error непонятная ошибка от тса */}
                <Form.Item label="Phone" name="phone" required={true}>
                    {/* @ts-expect-error непонятная ошибка от тса */}
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    );
}
