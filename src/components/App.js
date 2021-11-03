import React, {useState} from 'react';
import './App.css';

import Header from './Header';
import Footer from './Footer';
import Sections from './Sections';

const sections = [
  {
    id: 1,
    studentNames: ['joe','bob','vlad','fierce'],
  },
  {
    id: 2,
    studentNames: ['fred','malachi','jerry','isaac']
  }
];  


function App() {
  const [randomName, setRandomName] = useState(''); //sets state to get random name
  const [selectedClass, setSelectedClass] = useState(1);
  const [newNameField, setNewNameField] = useState('');
  const [studentList, setStudentList] = useState(sections);
 
  const currentClassNames = studentList[Number(selectedClass - 1)];
  const min = 0;
  const max = currentClassNames.studentNames.length;

  const getRandomName = () => {
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    const getName = currentClassNames.studentNames[randomNumber];
    setRandomName(getName);
  }

  const classHandler = (event) => {
    setSelectedClass(parseInt(event.target.value));
  }

  console.log(selectedClass);
  console.log('studentList', studentList);
  
  const addName = (e) => {
    if (newNameField === '') {
      e.preventDefault()
     }
    const newStudentList = studentList.map(classObj => {
      console.log('selectedClass', selectedClass, typeof selectedClass)
      console.log('newNameField', newNameField)
      if (classObj.id === selectedClass) {
        classObj.studentNames.push(newNameField)
      }
      return classObj
    })
    console.log('newStudentList', newStudentList)
    setStudentList(newStudentList)  
  }


  return (
    <div className="App">
      
      <Header />
      <Sections selectecClass={selectedClass} classHandler={classHandler} />
      <main className='main'>

        <div className='addName'>
          {/* <div>
            <input type='text' placeholder='NEW STUDENT NAME'></input>
            <button onClick={addName}>ADD</button>
          </div> */}
          <form className='inputName' onSubmit={addName}>
            <input 
              type='text' 
              placeholder='NEW NAME' 
              onChange={(e) =>  setNewNameField(e.target.value)} 
              value={newNameField} 
              >
              </input>
            <input type='submit' value='ADD'></input>
          </form>
        </div>
        
        <div className='randomName'>
          <p>{randomName}</p>
          <button onClick={getRandomName}>PICK R NAME</button>
        </div>
          
        <div className='namesList'>
          {
            studentList[Number(selectedClass - 1)].studentNames.map(name => {
              return (
                <button key={name} className='name'> {name} </button> 
              )
            })
          }
        </div>

      </main>          
      <Footer />
    </div>
  );
}

export default App;
