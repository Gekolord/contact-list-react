// Этот компонент отображает массив контактов
// @ts-ignore
import { Typography } from 'antd'
import List from 'antd/es/list';
import React from 'react'
import { Contact } from '../data/contactData'
import { useDispatch } from 'react-redux';

const { Text } = Typography;
export default function ContactList({ contactArray }: {contactArray: Contact[]}) {
  return (
    <>
    {contactArray.length === 0 ? (
      <Text type="secondary">No contacts by this letter.</Text>
    ) : (

    <List 
      dataSource={contactArray}
      renderItem={(contact: Contact) => (
        <List.Item
          actions={
                    [<a key="contact-edit">edit</a>, 
                     <a onClick={() => console.log(contact)} key="contact-remove">remove</a>]
                  }
        >
          <List.Item.Meta 
            title={contact.name}
            description= {
              <>
                <div>Vacancy: {contact.vacancy}</div>
                <div>Phone: {contact.phone}</div>
              </>
            }
          />
        </List.Item>
      )}
    />
    )}
    </>
  )
}
