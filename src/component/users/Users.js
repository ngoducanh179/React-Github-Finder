import React from 'react'
import Spinning from './../layout/Spinning'
import UsersItem from './UsersItem'
const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinning />
  } else {
    return (
      <div style={userStyle}>
        {
          users.map((user) => (
            <UsersItem key={user.id} user={user} />
          ))
        }
      </div>
    )
  }
}
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};
export default Users
