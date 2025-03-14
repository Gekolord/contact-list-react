import React, { useState } from 'react';
import { Button, Modal } from 'antd';
export default function AddContact() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        // @ts-expect-error тс ругается по непонятной причине*
        <Button type={'primary'}>Add</Button>
    )
}
