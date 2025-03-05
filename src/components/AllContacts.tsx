import React from 'react'
import { testObject } from '../data/contactData'
import CollapseContactList from './CollapseContactList'

export default function AllContacts() {
  return (
    <>
        {Object.keys(testObject).map((key) => {
            return <CollapseContactList dataArray={testObject[key]} dataKey={key}/>
        })}
    </>
  )
}
