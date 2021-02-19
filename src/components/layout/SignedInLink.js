import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authAction'

function SignedInLink(props) {
    return (
        <ul className="right">
            <li><NavLink to="/create">New Project</NavLink></li>
            <li><Link onClick={props.signOut}>Log out</Link></li>
            <li><NavLink to="/" className="btn btn-floating pink lighten-1">
                {props.profile.initials}
            </NavLink></li>
        </ul>
    );
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        signOut: () => {
            dispatch(signOut())
        }
    }
}

export default connect(null, mapDispatchToProps)(SignedInLink);