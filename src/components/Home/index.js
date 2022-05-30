import React from 'react'
import Sidebar from '../Sidebar'
import './index.css';
import logo from '../../assets/img/logo.png';
export default function Home() {
  return (
    <div>
        <Sidebar />
       <div className='info-zone'>
       <div className='text-zone'>
        <h1 className='mhead'> I'm Chaitanya.</h1>
        <p className='mtext'> Frontend developer</p>
            </div>
        <div className='pic'>
        <img src={logo} alt="" className='logo'/>
        </div>
       </div>
       
    </div>
  )
}
