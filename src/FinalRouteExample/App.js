import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './home';
import './main.css';
import Projects from './Projects';
import data from './data';

function App() {
    const [projects,setProjects] = useState(data);
    return (
        <BrowserRouter>
            <div className='app' >
                <header className="header">
                    <h1 className="brand">Diabysoft</h1>
                    <ul className="nav">
                        <li className="nav__item">
                            <Link to='/' className='nav__link' > Home </Link>
                        </li>
                        <li className="nav__item">
                            <Link to='/about' className='nav__link' > About</Link>
                        </li>
                        <li className="nav__item">
                            <Link to='/about/me' className='nav__link' > About Me</Link>
                        </li>
                        <li className="nav__item">
                            <Link to='/about/team' className='nav__link' > About Team</Link>
                        </li>
                        <li className="nav__item">
                            <Link to='/projects' className='nav__link' > Projects </Link>
                        </li>
                        <li className="nav__item">
                            <Link to='/contact' className='nav__link' > Contact </Link>
                        </li>
                    </ul>
                </header>
                <main className="main">
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route  path='/about' component={About} />
                        <Route path='/projects' render={(props) => {
                            return <Projects {...props} projects={projects} />
                        }} />
                        <Route path='/contact' component={Contact} />
                    </Switch>
                </main>
            </div>
        </BrowserRouter>
    )
}

export default App
