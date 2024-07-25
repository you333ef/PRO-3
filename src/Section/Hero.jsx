import React from 'react';
import './HeroStyles.css'; // استيراد ملف CSS المعدل
import heroImg from '../assets/Design uten navn.png';
import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg';
import twitterLight from '../assets/twitter-light.svg';
import twitterDark from '../assets/twitter-dark.svg';
import githubLight from '../assets/github-light.svg';
import githubDark from '../assets/github-dark.svg';
import linkedinLight from '../assets/linkedin-light.svg';
import linkedinDark from '../assets/linkedin-dark.svg';
import CV from '../assets/Yousef_Khaled_CV_pdf (5).pdf';
import { useTheme } from '../common/ThemeContext';

const Hero = () => {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className="hero-container">
      <div className="hero-color-mode-container">
        <img
          src={heroImg}
          className="hero-image"
          alt="Profile picture of Harris Johnsen"
        />
        <img
          className="hero-color-mode-icon"
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className="hero-info">
        <h1>
          Yousef
          <br />
          Khaled
        </h1>
        <h2>Frontend Developer</h2>
        <span className="hero-icon-container">
          <a href="https://wa.me/201117254520" target="_blank" rel="noopener noreferrer" className="hero-icon-link">
            <img src={twitterIcon} alt="Twitter icon" className="hero-icon-image"/>
          </a>
          <a href="https://github.com/you333ef" target="_blank" rel="noopener noreferrer" className="hero-icon-link">
            <img src={githubIcon} alt="Github icon" className="hero-icon-image"/>
          </a>
          <a href="https://tinyurl.com/3m2re6sw" target="_blank" rel="noopener noreferrer" className="hero-icon-link">
            <img src={linkedinIcon} alt="Linkedin icon" className="hero-icon-image"/>
          </a>
        </span>
        <p className="hero-description">
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>
        <a href={CV} download className="hero-link">
          <button className="hero-button">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
