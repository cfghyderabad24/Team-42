import React from 'react'
import sc from '../images/school.jpg'
import par from '../images/participate.jpg'
function School() {
  return (
    <div>
        <img src={sc} alt="" />
        <h1 className='text-primary text-center m-5'>Coding is Fun!</h1>
        <img src={par} alt="" />
    </div>
  )
}

export default School