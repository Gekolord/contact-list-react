import React, { useId } from 'react';
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
    const validatorRules = {
        stringLengthMin: {
            type: 'string',
            min: 3,
            message: 'Must not be shorter than 3',
        },
        stringLengthMax: {
            type: 'string',
            max: 20,
            message: 'Must not be longer than 20',
        },
        englishLettersOnly: {
            pattern: /^[A-Za-z\s]+$/,
            message: 'Must contain english letters only.',
        },
        noWhiteSpaceStart: {
            pattern: /^\S/,
            message: 'Must not start with whitespace.',
        },
        phoneLengthMin: {
            type: 'string',
            min: 6,
            message: 'Phone must not be shorter than 6',
        },
        phoneLengthMax: {
            type: 'string',
            max: 16,
            message: 'Phone must not be longer than 16',
        },
        numbersAndPlusOnly: {
            pattern: /^\+?\d+$/,
            message:
                'Must contain numbers only and have + in the beginning and nowhere else.',
        },
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
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input contact name!',
                        },
                        validatorRules.stringLengthMin,
                        validatorRules.stringLengthMax,
                        validatorRules.englishLettersOnly,
                        validatorRules.noWhiteSpaceStart,
                    ]}
                >
                    {/* @ts-expect-error непонятная ошибка от тса */}
                    <Input />
                </Form.Item>
                {/* @ts-expect-error непонятная ошибка от тса */}
                <Form.Item
                    label="Vacancy"
                    name="vacancy"
                    rules={[
                        {
                            required: true,
                            message: 'Please input contact vacancy!',
                        },
                        validatorRules.stringLengthMin,
                        validatorRules.stringLengthMax,
                        validatorRules.englishLettersOnly,
                        validatorRules.noWhiteSpaceStart,
                    ]}
                >
                    {/* @ts-expect-error непонятная ошибка от тса */}
                    <Input />
                </Form.Item>
                {/* @ts-expect-error непонятная ошибка от тса */}
                <Form.Item
                    label="Phone"
                    name="phone"
                    rules={[
                        {
                            required: true,
                            message: 'Please input contact phone!',
                            type: 'string',
                        },
                        validatorRules.phoneLengthMin,
                        validatorRules.phoneLengthMax,
                        validatorRules.numbersAndPlusOnly,
                    ]}
                >
                    {/* @ts-expect-error непонятная ошибка от тса */}
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    );
}
