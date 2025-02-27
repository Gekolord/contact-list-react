import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactList from './components/ContactList';

// test
function App() {
  return (
    <div className="App">
      <ContactList contactArray={[{name: "a", vacancy: 'bsaasddasasd', phone: 'c'}]}/>
    </div>
  );
}

export default App;
