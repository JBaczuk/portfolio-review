import React from 'react'
import  Sidebar from '../Sidebar/index'
import  './index.css';
import {SiHtml5,SiCss3,SiReact,SiJavascript,SiPython} from 'react-icons/si';
export default function About() {
  return (
    <div className="about-page">
      <Sidebar />
      <div className='aboutskill'>
      <div className='text-zone'>
        <h1 className='ahead'>
        About Me
        </h1>
          <p className='atext'>I'm a very ambitious front-end developer looking for a role in an established  IT  company with an opportunity to work with the latest technologies or frameworks on challenging and various projects.
          </p>
        <p className='atext'>
        I'm  confident, curious, and always working on improving my tech stack as per projects at a time
        </p>
        <p className='atext'>
        I write articles in Hashnode blogging community. I spend my free time in watching k-dramas, reading books, movies and whenever I am not writing content or code
        </p>
    </div>
<div className='askills'>
  <h1 className='s-head'>MySkills</h1>
   <div className='m-skill'>
   <div className='skill'>
      <SiHtml5 className='aicons'/>
      <h4>HTML 5</h4>
    </div>
    <div className='skill'>
    <SiCss3 className='aicons'/>
    <h4>CSS3</h4>
    </div>
    <div className='skill'>
      <SiJavascript className='aicons'/>
      <h4>JavaScript</h4>
    </div>
    <div className='skill'>
      <SiReact className='aicons'/>
      <h4>React</h4>
    </div>
    <div className='skill'>
      <SiPython className='aicons'/>
      <h4>Python</h4>
    </div>
   </div>
   
  </div>
</div>
</div>    
  )
}
