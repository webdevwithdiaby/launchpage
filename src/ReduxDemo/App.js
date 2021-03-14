import React from 'react';
import './app.css';
import ContactList from './components/contact-list/contact-lis.component';
import Header from './components/header/header.component';
import Modal from './components/modal/modal.component';

function App() {
    return (
        <div className='app' >
            <Header/>
            <main className='main-content' >
                <ContactList/>
            </main>
            <Modal/>
        </div>
    )
}


export default App;
