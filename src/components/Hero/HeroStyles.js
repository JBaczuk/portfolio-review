import styled from 'styled-components';
import BgAnimation from '../BackgrooundAnimation/BackgroundAnimation';

export const HeroSection = styled.div`
  justify-content: center;
  text-align: center;
  margin-top: 5rem;
  width: 100%;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    text-align: left;
    display: flex;
    flex-direction: column;
  }
`;
