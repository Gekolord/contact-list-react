import React, { useEffect } from 'react';
import './App.css';
import PageLayout from './components/PageLayout';
import { useDispatch } from 'react-redux';
import { contactLoaded } from './store/slices/contactsSlice';
// test
function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(contactLoaded());
        console.log(1);
    }, []);
    return (
        <div className="App">
            <PageLayout />
        </div>
    );
}

export default App;
