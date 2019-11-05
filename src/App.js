import React, { useState, useEffect, Fragment } from 'react';
import './App.css';
import Navbar from './component/Navbar'
import Search from './component/Search'
import Axios from 'axios'
import Users from './component/users/Users'
import Alert from './component/layout/Alert'
import About from './component/pages/About'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import User from './component/users/User'
function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)
  const [user, SetUser] = useState({})
  const [repos, SetRepos] = useState([])
  const GetUsers = async (text) => {
    setLoading(true)
    const res = await Axios.get(`https://api.github.com/search/users?q=${text}`)
    setLoading(false)
    setUsers(res.data.items)
  }
  const setalert = (msg, type) => {
    setLoading(false)
    setAlert({ msg, type })

    setTimeout(() => {
      setAlert(null)
      setLoading(false)
    }, 2000)

  }
  const GetUser = async (userLink) => {
    setLoading(true)
    const res = await Axios.get(`https://api.github.com/users/${userLink}`)
    setLoading(false)
    SetUser(res.data)
    console.log(res.data)
  }
  const GetRepos = async (userLink) => {
    setLoading(true)
    const res = await Axios.get(`https://api.github.com/users/${userLink}/repos?per_page=5&sort=created:asc`)
    SetRepos(res.data)
    setLoading(false)
  }
  const ClearUsers = () => {
    setUsers([])
    setLoading(false)
  }



  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' render={props => (
            <Fragment>
              <Search GetUsers={GetUsers} setalert={setalert} ClearUsers={ClearUsers} showClear={
                users.length > 0 ? true : false
              } />
              <Users users={users} loading={loading} />

            </Fragment>
          )} />
          <Route exact path='/about' component={About} />
          <Route exact path='/user/:login' render={({ match }) => (
            <User GetUser={GetUser} user={user} match={match} GetRepos={GetRepos} repos={repos} />

          )} />
        </Switch>
        <div className='container'>
          <Alert alert={alert} />
        </div>
      </div>
    </Router>
  );
}

export default App;
