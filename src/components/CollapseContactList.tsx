import React from 'react'
import ContactList from './ContactList'
import { Collapse } from 'antd'
import { Contact } from '../data/contactData'
type CollapseListParams = {
    dataKey: String;
    dataArray: Contact[];
}
export default function CollapseContactList({dataKey, dataArray}: CollapseListParams) {
  return (
    <Collapse items={[{key: dataKey, label: dataKey, children: <ContactList contactArray={dataArray}/>}]}/>
  )
}
