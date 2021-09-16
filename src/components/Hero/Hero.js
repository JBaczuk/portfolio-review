import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { HeroSection, SVG } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
      <HeroSection>
      <SectionTitle main center>
        I'm Brandon. <br />
        A Junior Software Engineer
      </SectionTitle>
      <SectionText>
        My passion for coding starts with my passion for providing a better life for my family.
      </SectionText>
      {/* <Button onClick={() => window.location = 'https://www.linkedin.com/in/bcalderonmorales-cmoe/'}>Learn more</Button> */}
      </HeroSection>
  </Section>
);

export default Hero;