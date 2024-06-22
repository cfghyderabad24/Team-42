import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import ChatbotComponent from '../ChatbotComponent'

function Rootlayout() {
  return (
    <div>
        <Navbar/>
        <div style={{minHeight:'100vh'}}>
        <Outlet/>
        </div>
        <Footer/>
        <ChatbotComponent />
    </div>
  )
}

export default Rootlayout