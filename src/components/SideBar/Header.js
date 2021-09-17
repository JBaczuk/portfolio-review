import React from 'react';
import { Link } from 'gatsby';

export default function Footer({ title, heading, avatar }) {
  return (
    <div id="logo">
      <Link to="/">
        <span className="image avatar48">
          <img height="128px" src={avatar} alt="" />
        </span>

        <h1 id="title">{title}</h1>
        <p>
          <a href="https://www.w3schools.com/whatis/whatis_fullstack.asp">
            {heading}
          </a>
        </p>
      </Link>
    </div>
  );
}
