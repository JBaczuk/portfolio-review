//displays 6 sections
//click handles update canvas with new names
//doubleclick handles deleting names from section
//

import React, {useState} from 'react'
import './Section.css'

function Sections(props) {
  const sections = [
    { id:'section1', names: [] },
    { id:'section2', names: [] },
    { id:'section3', names: [] },
    { id:'section4', names: [] },
    { id:'section5', names: [] },
    { id:'section6', names: [] }
  ]

  return (
    <div className='sections'>
      <button className='button1'>1</button>  
      <button className='button2'>2</button>
      <button className='button3'>3</button>
      <button className='button4'>4</button>
      <button className='button5'>5</button>
      <button className='button6'>6</button>
    </div>
  );
}
export default Sections;