import React from 'react';
import './App.css';
import PageLayout from './components/PageLayout';
import ContactForm from './components/ContactFormModal';
// test
function App() {
    return (
        <div className="App">
            <PageLayout />
            <ContactForm />
        </div>
    );
}

export default App;
