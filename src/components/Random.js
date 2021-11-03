// get all names from canvas component 
// click (r key) handles random name selection 
// send update to student phone 

import React, { useState } from "react";

function Random() {
    
    const [randomName, setRandomName] = useState('')     
    
    return ( 
        <header className="App-header">
            
            <h1>PICK R NAME</h1>
            <h3>A RANDOM NAME PICKER</h3>
            
        </header>

     )
}

export default Random