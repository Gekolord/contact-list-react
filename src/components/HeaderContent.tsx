import React from 'react';
// @ts-expect-error тс ругается по непонятной причине
import { Button, Flex } from 'antd';
import AddContact from './AddContact';
import RemoveAllContacts from './RemoveAllContacts';
import SearchContact from './SearchContact';

export default function HeaderContent() {
    return (
        <Flex gap={'small'} align={'center'} style={{ height: '100%' }}>
            <AddContact />
            <SearchContact />
            <RemoveAllContacts />
        </Flex>
    );
}
