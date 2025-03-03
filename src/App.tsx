import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactList from './components/ContactList';
import { testObject } from './data/contactData';
import CollapseContactList from './components/CollapseContactList';
// test
function App() {
  return (
    <div className="App">
      <CollapseContactList dataKey="A" dataArray={testObject.A}/>
    </div>
  );
}

export default App;
