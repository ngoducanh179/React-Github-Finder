import React from 'react'
import ReposItem from './ReposItem'

const Repos = ({ repos }) => {
  return (
    <div>
      {
        repos.map((repo) => (
          <ReposItem key={repo.id} repo={repo} />
        ))
      }
    </div>
  )
}

export default Repos
