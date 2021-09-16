import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import ToTop from '../components/ToTop/ToTop';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import { motion } from 'framer-motion';
import Link from 'data-prefetch-link';

const Home = () => {


  return (
    <Layout>
        <Section id="top" grid>
          <Hero />
          <BgAnimation />
        </Section>
        <motion.div animate="animate" initial="initial" exit={{opacity:0}}>
          <Projects />
        </motion.div>
        <motion.div animate="animate" initial="initial" exit={{opacity:0}}>
          <Technologies />
        </motion.div>
        <motion.div animate="animate" initial="initial" exit={{opacity:0}}>
          <Timeline />
        </motion.div>
        <motion.div animate="animate" initial="initial" exit={{opacity:0}}>
          <Acomplishments />
        </motion.div>
        {/* <ToTop /> */}
    </Layout>
  );
};

export default Home;
