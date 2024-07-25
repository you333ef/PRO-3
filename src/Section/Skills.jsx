import React from 'react';
import './SkillsStyles.css';
import checkMarkIconDark from '../assets/checkmark-dark.svg';
import checkMarkIconLight from '../assets/checkmark-light.svg';
import SkillList from '../common/SkillList';
import { useTheme } from '../common/ThemeContext';

const Skills = () => {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className="skills-container">
      <h1 className="sectionTitle">Skills</h1>
      <div className="skillList">
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="Apis" />
      </div>
      <hr className="skills-hr" />
      <div className="skillList">
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="JQuery" />
      
        <SkillList src={checkMarkIcon} skill="Other libraries" />
      </div>
      <hr className="skills-hr" />
      <div className="skillList">
       
        <SkillList src={checkMarkIcon} skill="Githup" />
        <SkillList src={checkMarkIcon} skill="Git" />
       
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
      </div>
    </section>
  );
};

export default Skills;
