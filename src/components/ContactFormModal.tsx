import React, { useId } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import { useDispatch } from 'react-redux';
import { contactAdded } from '../store/slices/contactsSlice';
type FinishValuesType = {
    name: string;
    vacancy: string;
    phone: string;
};

type ContactFormModalProps = {
    handleCancel?: () => void;
    isOpen?: boolean;
};
export default function ContactForm({
    handleCancel,
    isOpen = true,
}: ContactFormModalProps) {
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
                // @ts-expect-error непонятная ошибка от тса
                <Button form={id} htmlType="submit" type="primary">
                    Submit
                </Button>,
                // @ts-expect-error непонятная ошибка от тса
                <Button form={id} htmlType="button" onClick={handleCancel}>
                    Cancel
                </Button>,
            ]}
            open={isOpen}
            onCancel={handleCancel}
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
