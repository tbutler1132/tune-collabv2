import React from 'react';
import './Styling/nav.css'

function Navbar(props) {
    return (
        <div className="nav-bar">
            <p className="logout-button" onClick={props.logoutHandler}>Logout</p>
        </div>
    );
}

export default Navbar;