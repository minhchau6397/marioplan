import React from 'react';
import { NavLink } from 'react-router-dom';

function SignedOutLink(props) {
    return (
        <ul className="right">
            <li><NavLink to="/signin">Log in</NavLink></li>
            <li><NavLink to="/signup" >Sign up</NavLink></li>
        </ul>
    );
}

export default SignedOutLink;