import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import SignedInLink from './SignedInLink';
import SignedOutLink from './SignedOutLink';

function Navbar(props) {
    const { auth, profile } = props;
    const [show, setShow] = useState(false);
    const link = auth.uid ? <SignedInLink profile={profile} /> : <SignedOutLink />;

    const handleToggleIcon = () => {
        setShow(!show)
    }

    const renderMobile = () => {
        return (
            <div className="mobile">
                <div className={`nav-item ${show ? "active" : ""}`}>
                    {link}
                </div>
            </div>
        )
    }

    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container nav-wrap">
                <Link to="/" className="brand-logo">Marioplan</Link>
                <div className="tablet">
                    {link}
                </div>
                <button className={`mobile nav-toggler-icon ${show ? "active" : ""}`} onClick={handleToggleIcon}>
                    <i className="fas fa-bars" />
                </button>
            </div>
            {renderMobile()}
        </nav>
    );
}

const mapStateToProps = (state, ownProps) => {
    // console.log(state.firebase);
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);