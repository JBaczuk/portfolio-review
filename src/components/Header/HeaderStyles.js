import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Nav = styled.div`
  position: fixed;
  top: 25;
  left: 0;
  z-index: 2;
  background: #273043;
  padding: 1rem 3rem;
  display: flex;
  width: 100%;
  box-shadow: 1rem 1rem 3rem rgba(0, 0, 0, 0.9);
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media ${(props) => props.theme.breakpoints.sm} {
    
  }
`;

export const Logo = styled.a`
  padding: 2rem 0;
  text-decoration: 'none';
  font-weight: 900;
  color: White;
  font-size: 2rem;
  transition: 0.4s ease;
  &:hover {
    color: #F02D3A;
    font-weight: 500;
    opacity: 1;
    cursor: pointer;
  }
  span {
    font-weight: 300;
    font-size: 1.5rem;
  },
  @media ${(props) => props.theme.breakpoints.sm} {
    
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media ${(props) => props.theme.breakpoints.sm} {
    overflow: hidden;
    max-height: ${props => props.isOpen ? '300px;' : '0;'}
    flex-direction: column;
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;


// Navigation Links
export const NavLink = styled.a`
  padding: 1rem 2rem;  
  font-size: 1.5rem;
  line-height: 32px;
  color: white;
  transition: 0.5s ease;
  &:hover {
    color: #F02D3A;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

export const Hamburger = styled.div`
  display: none;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    background: white;
    border-radius: 10px;
    transition: 0.5s ease;
    &:hover {
      background: #F02D3A; 
      opacity: 1;
      cursor: pointer;
    }
    span {
      height: 3px;
      width: 25px;
      background: #273043;
      margin-bottom: 3px;
      border-radius: 5px;
    }
  }
`;

export const Social = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    overflow: hidden;
    max-height: ${props => props.isOpen ? '300px;' : '0;'}
    flex-direction: column;
    transition: max-height 0.3s ease-in;
    width: 100%;
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`;

// Social Icons 

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #F02D3A;
    transform: scale(1.2);
    cursor: pointer;
    
  }
`