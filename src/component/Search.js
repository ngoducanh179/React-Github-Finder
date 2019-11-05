import React, { useState } from 'react'

const Search = ({ GetUsers, setalert, ClearUsers, showClear }) => {
  const [text, setText] = useState('')
  const onSubmit = (e) => {
    e.preventDefault()
    if (text === '') {
      setalert('say something', 'light')
    }
    GetUsers(text)
    setText('')
  }
  const onChange = (e) => setText(e.target.value)
  return (
    <div className='container'>
      <form className='form-group' onSubmit={onSubmit}>
        <input type="text" className="form-control" value={text} onChange={onChange} />
        <button type='submit' className='btn btn-outline-success btn-lg btn-block mt-2'>Search</button>
      </form>
      {showClear && <button className='btn btn-light btn-block' onClick={ClearUsers}>Clear</button>}
    </div>
  )
}

export default Search
