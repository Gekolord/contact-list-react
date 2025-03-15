import React from 'react';
// @ts-expect-error тс ругается по непонятной причине
import { Button, Flex } from 'antd';
import AddContact from './AddContact';

export default function HeaderContent() {
    return (
        <Flex gap={'small'} align={'center'} style={{ height: '100%' }}>
            <AddContact />
            {/* @ts-expect-error тс ругается по непонятной причине*/}
            <Button>Search</Button>
            {/* @ts-expect-error тс ругается по непонятной причине*/}
            <Button color={'danger'} variant={'solid'}>
                Remove All
            </Button>
        </Flex>
    );
}
