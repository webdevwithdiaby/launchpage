import React, {useState} from 'react';
import Subject from './components/Subject';
import './main.css';
import HomePage from './pages/HomePage';
import subjectsData from './subjects';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import HematologyPage from './pages/HematologyPage';
import BacteriologyPage from './pages/BacteriologyPage';

function App() {
    const [subjects,setSubjects] = useState(subjectsData);
    return (
        <BrowserRouter>
            <div>
                <h1 className="title"> MaBioLogic </h1>
                <Switch>
                    <Route exact path='/' render={(props)=>(<HomePage {...props} subjects={subjects}/>)} />
                    <Route path='/hematology' component={HematologyPage} />
                    <Route path='/bacteriology' component={BacteriologyPage} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App
