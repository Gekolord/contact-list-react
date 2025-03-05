import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactList from './components/ContactList';
import { allContactData, testObject } from './data/contactData';
import CollapseContactList from './components/CollapseContactList';
import AllContacts from './components/AllContacts';
// test
function App() {
  return (
    <div className="App">
      <AllContacts />
    </div>
  );
}

export default App;
