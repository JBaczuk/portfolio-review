import React, { useRef } from 'react'
import { FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';
import {SiHashnode} from 'react-icons/si'
import Sidebar from '../Sidebar/index';
import emailjs from '@emailjs/browser';
import './index.css';
export default function Contact() {
 const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm("serviceid","templateid",form.current,"publicid")
    .then((result) => {
              console.log(result.text, result);
          }, (error) => {
              console.log(error.text);
          });

       
  }
  return (
    <div className='contact'>
     <Sidebar />
    <div className='c-container'>
    <h1 className='chead'> Contact me </h1> 
     <p className='ctext'>I am looking collbarations, freelancing opportunities- especially ambitious or large projets.
       However, if you  have other request or questions, don't hesitate to contact me using below form either
     </p>
     
   <div className='contact-form'>
   <form ref={form} onSubmit={sendEmail}>
       <ul>
         <li>
           <input type="text" placeholder='name' id="fullname"
              name="name"
           required/>
         </li>
           <li >
             <input type='email' name="email" placeholder='email' id="email" required />
           </li>
           <li className='full'>
           <input type="text" placeholder='subject' name="subject" id="subject" required/>
         </li>
         <li >
           <textarea placeholder='message' name='message' id="message" className="ttext" required></textarea>
           </li>
           <li>
             <input type="submit" value="SEND" className="flat-button"/>
           </li>
         </ul>
       </form>
   
   <div className='social'>
     <h1 className='shead'>Follow me</h1>
     <div className='icon'>
    <a href="https://twitter.com/Chaitanyaoffici" rel='noreferrer' target="_blank">
      <FaTwitter className="cicon" />
    </a>
    <a href='https://github.com/ChaitanyaOfficiel' rel='noreferrer' target="_blank">
      <FaGithub className="cicon" />
    </a>
    <a href="https://www.youtube.com/channel/UCSwJNwgVVUFvYCg9cywtJ2A" rel='noreferrer' target="_blank">
      <FaYoutube  className="cicon"/>
    </a>
    <a href="https://chaitanyaoffic.hashnode.dev/" rel='noreferrer' target="_blank">
      <SiHashnode className="cicon" />
    </a>
     </div>
     </div>
   </div>
     </div>
</div>
   
  )
}
