import React from 'react';
import {Route, Link}  from 'react-router-dom';

const Student = (props) => {

    const name = props.match.params.name;

    return (
        <div>
            <h3> Student Info for {name ? name: 'Nobody!'}</h3>
            <h4> What's in match <pre>{JSON.stringify(props.match, null, 4)}</pre></h4>
            <h4> What's in location <pre>{JSON.stringify(props.location, null, 4)}</pre></h4>
        </div>
    )
}


const Students = () => (
<div>
    <h2> Students: </h2>

    <ul>
        <li>
            <Link to='/students/craig/'>Craig</Link>
            </li>

        <li>
            <Link to='/students/ignacio/'>Ignacio</Link>
        </li>
    </ul>

    <Route path='/students/:name' component={Student} />
</div>

);

export default Students;