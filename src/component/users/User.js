import React, { useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Repos from '../repos/Repos'
const User = ({ GetUser, user, match, GetRepos, repos }) => {
  useEffect(() => {
    GetUser(match.params.login)
    GetRepos(match.params.login)

  }, [])
  return (
    < Fragment >
      <Fragment>
        <Link to='/' className='btn -btn-light' >Back to Search</Link>

      </Fragment>
      hireable:{
        user.hireable ? <i className='fas fa-check text-success' /> : <i className='fas fa-times-circle text-danger' />
      }
      <div className='card grid-2'>
        <div className='all-center'>
          <img src={user.avatar_url} className='round-img' alt='' style={{ width: '150px' }} />
          <h1>{user.login}</h1>
          {user.location && <Fragment>
            location:{user.location}
          </Fragment>}
        </div>
      </div>
      {user.bio && <Fragment>
        <h3>Bio</h3>
        <p>{user.bio}</p>
      </Fragment>}
      <a href={user.html_url} className="btn btn-dark my-1">Visit Github Profile</a>
      <ul>
        <li>{
          user.company && <Fragment>
            <strong>Company: </strong>{user.company}
          </Fragment>
        }</li>
        <li>{
          user.blog && <Fragment>
            <strong>Website: </strong>{user.blog}
          </Fragment>
        }</li>
      </ul>
      <div className='card text-center'>
        <div className='badge badge-primary'>Follower: {user.followers}</div>
        <div className='badge badge-success'>Following: {user.following}</div>
        <div className='badge badge-danger'>Public Repos: {user.public_repos}</div>
        <div className='badge badge-dark'>Public_Gists: {user.public_gists}</div>
      </div>
      <div>
        <Repos repos={repos} />
      </div>
    </Fragment >


  )
}

export default User
