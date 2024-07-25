import React from 'react';

const SkillList = ({ src, skill }) => {
  return (
    <div className="skill-item">
      <img src={src} alt={`${skill} icon`} className="skill-icon" />
      <p className="skill-text">{skill}</p>
    </div>
  );
};

export default SkillList;
