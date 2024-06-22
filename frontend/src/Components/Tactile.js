import React from 'react'
import tactile from '../images/tactileimg.jpg'
import coding from '../images/coding.jpg'
import usp from '../images/usp.jpg'
function Tactile() {
  return (
    <div>
        <img src={tactile} alt="" />
        <h1 className='text-center text-primary m-4'>CODING FOR EVERYONE</h1>
        <img src={coding} alt="" />
        <img src={usp} alt="" />
    </div>
  )
}

export default Tactile