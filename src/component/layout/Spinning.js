import React from 'react'
import Spinner from './spinner.gif'
const Spinning = () => {
  return (
    <div>
      <img src={Spinner} alt='loading...' style={{ width: '200px', margin: 'auto', display: 'block' }} />
    </div>
  )
}

export default Spinning
