import React, {useState} from 'react';
import { BrowserRouter,Link, Switch, Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import './main.css';
import Projects from './Projects';
import data from './data';


function App() {
    const [projects,setProjects] = useState([
        {
            id: 1,
            name:'MaBiologic',
            description:'MaBiologic Description'
        },
        {
            id: 2,
            name:'Univer Sante',
            description:'UNivers Sante Description'
        },
        {
            id: 3,
            name:'Saxa',
            description:'Saxa Description'
        },
    ]);
    return (
        <BrowserRouter>
            <div className='app' >
                <header className="header">
                    <h1 className="brand">Diabysoft</h1>
                    <ul className="nav">
                        <li className="nav__item">
                            <Link to='/' className='nav__link' >Home</Link>
                        </li>
                        <li className="nav__item">
                            <Link to='/projects' className='nav__link' >Projects</Link>
                        </li>
                        <li className="nav__item">
                            <Link to='/about' className='nav__link' >About</Link>
                        </li>
                        <li className="nav__item">
                            <Link to='/about?type=team' className='nav__link' >About Team</Link>
                        </li>
                        <li className="nav__item">
                            <Link to='/about?type=me' className='nav__link' >About Me</Link>
                        </li>
                        <li className="nav__item">
                            <Link to='/contact' className='nav__link' >Contact</Link>
                        </li>
                    </ul>
                </header>
                <main className="main">
                   <Switch>
                        <Route exact path='/' render={(props)=> (<Home {...props} title={`Home`} />) } />
                        <Route exact path='/projects' render={(props) => (<Projects {...props} title={`Projects`} projects={projects} />) } />
                        <Route exact path='/about' component={About}  ></Route>
                        <Route exact path='/contact' component={Contact}  ></Route>
                   </Switch>
                </main>
            </div>
        </BrowserRouter>
    )
}

export default App
