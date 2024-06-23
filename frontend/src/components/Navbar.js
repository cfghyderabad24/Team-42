import React from 'react'
import { Link } from 'react-router-dom'
// import image1 from '../Images/image1.jpg'
function Navbar() {
  return (
    <div>
        <ul className="nav bg-dark p-3 lead">
            <li className="nav-item1 ">
                {/* <img src={image1} alt="" style={{width:'70px',height:'70px'}} /> */}
            </li>
            <div className='d-flex mx-auto'>
            <li className="nav-item">
                <Link className='nav-link' to=''>Home</Link>
            </li>
            <li className="nav-item">
                <Link className='nav-link' to="signin">Sign in</Link>
            </li>
            <li className="nav-item">
                <Link className='nav-link' to="signup">Sign up</Link>
            </li>
            <li className="nav-item">
                <Link className='nav-link' to="school">Progame for Schools</Link>
            </li>
            <li className="nav-item">
                <Link className='nav-link' to="tactile">Progame Tactile</Link>
            </li>
            <li className="nav-item">
                <Link className='nav-link' to="contact">Contact us</Link>
            </li>
            <li className="nav-item">
                <Link className='nav-link' to="about">About us</Link>
            </li>
            </div>
            
               
         </ul>
    </div>
  )
}

export default Navbar