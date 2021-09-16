import React, { useState } from 'react';
import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { Nav, Hamburger, Logo, Menu, Social, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }

  return (
    <Nav>
      <>
        <Logo href="#top">
            My<span>Portfolio</span>
        </Logo>
        <Hamburger onClick={handleClick}>
          <span />
          <span />
          <span />
        </Hamburger>
        <Menu isOpen={isOpen}>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
          
          <Link href="#tech">
            <NavLink>Technologies</NavLink>
          </Link>

          <Link href="#about">
            <NavLink>About</NavLink>
          </Link>
        </Menu>
          
        <Social>
          <SocialIcons href="https://github.com/BA-CalderonMorales">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/bcalderonmorales-cmoe/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://twitter.com/BrandonACalder1">
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
        </Social>
      </>
    </Nav>
  )
}

export default Header