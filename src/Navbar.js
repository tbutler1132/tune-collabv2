import React from 'react';

function Navbar(props) {
    return (
        <div className="nav-bar">
            <h1 onClick={props.logoutHandler}>Logout</h1>
        </div>
    );
}

export default Navbar;