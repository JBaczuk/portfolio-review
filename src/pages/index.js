import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';
import Footer from '../components/SideBar/Footer';
import pic4 from '../assets/images/portfolio1.jpg';
import pic5 from '../assets/images/portfolio2.jpg';
import config from '../../config';
import aboutMePic from '../assets/images/aboutMePic.png';
import Scroll from '../components/Scroll';

const sections = [
  { id: 'about', name: 'About Me', icon: 'fa-coffee' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-code' },
  { id: 'contact', name: 'Contact', icon: 'fa-save' },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h2 className="alt">
              Hello! I am <strong>Vlad Solokha </strong>
              <br />
              Full Stack Developer
            </h2>
          </header>

          <footer>
            <Scroll type="id" element={'portfolio'}>
              <a href="#portfolio" className="button">
                See My Work
              </a>
            </Scroll>
          </footer>
        </div>
      </section>

      <section id="about" className="three">
        <div className="container">
          <header>
            <h2>About Me</h2>
          </header>

          <a href="/#" className="image featured">
            <img src={aboutMePic} alt="" />
          </a>

          <p>
            I love simple and innovative apps. I am passionate about technology 
            that makes life easier, simpler, and gives you more time. 
            Apps should build you up. I'm constantly learning how to 
            build simpler, more responsive applications,
            UIs, and websites to help companies grow. I am a
            husband, father of 3. I also love all things coffee and all
            things sweet.

            My backgound and degrees are in education and chemistry.
            I am Belarussian and also speak Russian Fluently. 

            See my LinkedIn profile for more information. 
          </p>
        </div>
      </section>

      <section id="portfolio" className="two">
        <div className="container">
          <header>
            <h2>Portfolio</h2>
          </header>

          <div className="row">
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="https://devto-vsolokha.netlify.app" className="image fit">
                  <img src={pic4} alt="Project 1" />
                </a>
                <header>
                  <h3>My DEV.to Blog Website built using Stackbit</h3>
                </header>
              </article>
              <article className="item">
                <a href="https://pick-name.netlify.app/" className="image fit">
                  <img src={pic5} alt="Project 2" />
                </a>
                <header>
                  <h3>Project 2: Pick-Name: Random Student Chooser</h3>
                </header>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="four">
        <div className="container">
          <header>
            <h2>Contact</h2>
          </header>

          <p>
            Let's work together
            <br />
            I am open to mentor and be mentored
            <br />
            Message me
          </p>
          <h6 className="message-me">
            <a href="https://linkedin.com/in/vlad-solokha"> LinkedIn </a>
            <a href="https://github.com/vladsolokha"> GitHub </a>
            <a href="mailto:vsolokha@gmail.com"> Email </a>
          </h6>

          <div className="social-links">
            <Footer socialLinks={config.socialLinks} />
          </div>
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage; 