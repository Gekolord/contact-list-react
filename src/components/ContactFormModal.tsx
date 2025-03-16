import React, { useEffect, useId } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { Contact } from '../data/contactData';

type ContactFormModalProps = {
    onCancel: () => void;
    isOpen: boolean;
    onFinish: (formValues: Contact) => void;
    formName: string;
    oldContact?: Contact;
};
export default function ContactFormModal({
    onCancel,
    isOpen,
    onFinish,
    formName,
    oldContact,
}: ContactFormModalProps) {
    const [form] = useForm();
    const id = useId();
    const clearFields = () => {
        form.setFieldsValue({
            name: '',
            vacancy: '',
            phone: '',
        });
    };
    const handleCancel = () => {
        onCancel();
        clearFields();
    };
    const handleFinish = () => {
        onFinish(form.getFieldsValue());
        clearFields();
    };
    const handleAfterOpenChange = (open: boolean) => {
        if (open) {
            if (oldContact) {
                const { name, vacancy, phone } = oldContact;
                form.setFieldsValue({
                    name,
                    vacancy,
                    phone,
                });
            }
        }
    };
    return (
        // @ts-expect-error непонятная ошибка от тса
        <Modal
            afterOpenChange={handleAfterOpenChange}
            title={formName}
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
                form={form}
                clearOnDestroy={true}
                layout={'vertical'}
                onFinish={handleFinish}
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
