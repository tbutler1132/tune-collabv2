import logo from './logo.svg';
import {Route, Switch, withRouter} from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Login from './Login'
import Signup from './Signup'
import Home from './Home'
import Navbar from './Navbar'

import './App.css';

function App(props) {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      fetch('http://localhost:3000/profile', {
        method: "GET",
        headers: { Authorization: `Bearer ${token}`},
      })
      .then(response => response.json())
      .then(data => setUser(data.user))
    } else {
      props.history.push("/signup")
    }

  })

  function loginHandler(userInfo){
    fetch('http://localhost:3000/login', {
      method: "POST",
      headers: {
        accepts: "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({user: userInfo})
    })
    .then(response => response.json())
    .then(data => {
      
      localStorage.setItem("token", data.jwt)
      setUser(data.user)
      props.history.push("/home")
    })
  }

  function logoutHandler(){
    localStorage.removeItem("token")
    props.history.push("/login")
    setUser(null)
  }

  return (
    <div className="App">
      <Navbar user={user} logoutHandler={logoutHandler}/>
      <Switch>
        <Route path="/login" render={() => <Login submitHandler={loginHandler}/>} /> 
        <Route path="/signup" render={() => <Signup />} />
        <Route path="/home" render ={() => <Home />} />
      </Switch>
    </div>
  );
}

export default withRouter(App)
