import React from 'react'
import Sidebar from '../Sidebar/index';
import './index.css';
import { FaGithub, FaLink } from 'react-icons/fa';
import Land from '../../assets/img/Land.png';
import Tgame from '../../assets/img/Tgame.png';
import RPS from '../../assets/img/RPS.png';
export default function Portfolio() {
  return (
    <div className="portfolio-page">
<Sidebar />
  <div className='p-container'>
<h1 className="phead">My Projects</h1>
<div className='pcont'>
<div className="card">
  <img alt='land' src={Land}/>
    <h1 className="c-head"> NETFLIX Landing page </h1>
    <p className="c-text">In HTML, CSS, and JavaScript, I have to build a clone of the NETFLIX India landing page. Some parts are left blank complete soon</p>
    <div className="link">
      <a className='ca' href="https://github.com/ChaitanyaOfficiel/tic-tac-toe-reactapp">
        <FaGithub className="gicon" />
      </a>
      <a className='ca' href=" https://chtictactoegame.netlify.app/">
        <FaLink className="gicon"/>
      </a>
    </div>
</div>
<div className="card cimg1">
<img alt='land' src={RPS}/>
    <h1 className="c-head">Rock Paper Scissors </h1>
    <p className="c-text"> I had built a Rock Paper Scissors game in react using react hooks in react. It is a game where users compare their choices to computer choices and declare the winner. </p>
    <div className="link">
      <a className='ca' href="https://github.com/ChaitanyaOfficiel/Rock-Paper-and-Scissors-using-React-">
        <FaGithub className="gicon"/>
      </a>
      <a className='ca' href="https://rps-gameinr.netlify.app/">
        <FaLink className="gicon"/>
      </a>
    </div>

</div>
<div className="card">
<img alt='land' src={Tgame}/>
    <h1 className="c-head">Tic-tac-toe game </h1>
    <p className="c-text">I had built a tic-tac-toe game in redux and material UI. A user and another play the game with themselves. It has complex hooks and state management techniques used in it.</p>
    <a className='link' href="https://github.com/ChaitanyaOfficiel/Netflix-cloned-website">
        <FaGithub className="gicon"/>
      </a>

</div>
</div>
</div>
    </div>
  )
}
