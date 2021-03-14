import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import './styles.css';

const App = () => {
    return (
      <Router>  
        <div className="app">
            <header className="header">
                <h1 className="logo">MaBioLogic</h1>
                <ul className="navigation">
                    <li className="navigation__item">
                        <Link to='/' className='navigation__link' >Home</Link>
                    </li>
                    <li className="navigation__item">
                        <Link to='/about' className='navigation__link' >About</Link>
                    </li>
                    <li className="navigation__item">
                        <Link to='/contact' className='navigation__link' >Contact</Link>
                    </li>
                </ul>
            </header>
            <main className="main">
               <Switch>
                   <Route exact path='/' component={Home} />
                   <Route exact path='/about' component={About} />
                   <Route exact path='/contact' component={Contact} />
               </Switch>
            </main>
        </div>
      </Router>
    );
}

export default App;