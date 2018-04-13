import React from 'react';
import { Route, Link } from 'react-router-dom';
import Students from './Students'

const Home = () => (
    <h1>Home</h1>
);

const About = (props) => {
    console.log(props);
    return (
    <h1>About</h1>
   )
};

const Contact = (props) => (
    <div>
    <h1>Contact Us</h1>
    <pre>{JSON.stringify(props, null,4)}</pre>
    </div>
);

const Navigation = () => (
    <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
            <li><Link to='/students'>Students</Link></li>
    </ul>
)

const App = () => {

    const someVariable = 42;

    return ( <div>
        <h1>Hello, world!</h1>
        <Navigation />

        <Route exact path="/" component={Home} />
        <Route path="/about" render={(props) => <About {...props} extra={someVariable} />} />
        <Route path="/contact" component={Contact} />
        <Route path="/students" component={Students} />

    </div>)
};

export default App;