import React from 'react'
import {NavLink} from 'react-router-dom';
import {FaHome, FaUserAlt, FaLaptopCode,FaEnvelope } from  'react-icons/fa'
import  './index.css';
export default function Sidebar() {
  return (
    <div className='container'>
     <nav>
    <NavLink exact="true" activeclassname='active' to='/' >
    <FaHome className="icons" />
    </NavLink>
    <NavLink exact="true" activeclassname='active' className='abt-link' to='/about' >
    <FaUserAlt className="icons"/>
    </NavLink>
    <NavLink exact="true" activeclassname='active' className='lc-link' to='/portfolio' >
    <FaLaptopCode className="icons" />
    </NavLink>
    <NavLink exact="true" activeclassname='active' className='e-link' to='/contact' >
    <FaEnvelope className="icons" />
    </NavLink>
    </nav>
    </div>
  )
}
