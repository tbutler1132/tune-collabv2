import React from 'react';
import './Styling/home.css'

function Home(props) {
    console.log(props)
    return (
        <div>
            {props.user ?
            <div className="home-page-text">
                <h1>WELCOME</h1>
                <h3>Studio</h3>
                <h3>Profile</h3>
                <h3>Rules</h3>
            </div>
            :
            null
            }
        </div>
    );
}

export default Home;