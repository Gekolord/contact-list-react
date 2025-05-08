import React, { useEffect } from 'react';
import './App.css';
import PageLayout from './components/PageLayout';
import { contactLoaded } from './store/slices/contactsSlice';
import { useAppDispatch } from './hooks/redux';
// test
function App() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        // localStorage.removeItem('loglevel');
        dispatch(contactLoaded());
    }, []);
    return (
        <div className="App">
            <PageLayout />
        </div>
    );
}

export default App;
