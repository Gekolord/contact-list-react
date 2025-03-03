import React from 'react'
import ContactList from './ContactList'
import { Collapse } from 'antd'
import { Contact } from '../data/contactData'

type CollapseListParams = {
    dataKey: string;
    dataArray: Contact[];
}
// Сворачивающийся компонент со списком контактов в виде массива внутри
export default function CollapseContactList({dataKey, dataArray}: CollapseListParams) {
  return (
    // @ts-ignore потому что без него ts выдаёт ошибки которые ничем не фиксятся
    <Collapse items={[{key: dataKey, label: dataKey, children: <ContactList contactArray={dataArray}/>}]}/>
  )
}
