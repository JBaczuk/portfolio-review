import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 25, text: 'Open Source Projects'},
  { number: 20, text: 'CodingHelp101 Discord Server Community Members', },
  { number: 100, text: 'Followers on LinkedIn', },
  { number: 6, text: 'Followers on GitHub', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle main>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
