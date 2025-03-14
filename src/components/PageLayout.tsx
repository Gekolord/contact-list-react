import React from 'react';
// @ts-expect-error потому что тс думает, что такого модуля нет
import { Layout } from 'antd';
import AllContacts from './AllContacts';
import HeaderContent from './HeaderContent';
export default function PageLayout() {
    const { Header, Content } = Layout;
    return (
        <Layout>
            <Header>
                <HeaderContent />
            </Header>
            <Content>
                <AllContacts />
            </Content>
        </Layout>
    );
}
