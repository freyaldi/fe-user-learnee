import React from 'react'
import Navbar from '../organisms/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='h-screen bg-[#fff0e5]'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Layout