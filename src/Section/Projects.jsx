import React from 'react';
import './ProjectsS.css'
import viberr from '../assets/viberr.png';
import freshBurger from '../assets/fresh-burger.png';
import hipsster from '../assets/hipsster.png';
import fitLift from '../assets/fitlift.png';
import ProjectCard from '../common/ProjectCard';
const Projects = () => {
  return (
    <section id="projects" className="container">
    <h1 className="sectionTitle">Projects</h1>
    <div className="projectsContainer">
      <ProjectCard
        src={viberr}
        link="http://tessst-git-main-yousef1.vercel.app"
        h3="Viberr"
        p="Ecommerce"
      />
      <ProjectCard
        src={freshBurger}
        link="https://you333ef.github.io/CRUD_PROJECT"
        h3="Crud"
        p="Crud Product Maneger"
      />
      <ProjectCard
        src={hipsster}
        link="https://you333ef.github.io/EDITING"
        h3="Hipsster"
        p="Editing Photos"
      />
      <ProjectCard
        src={fitLift}
        link="https://you333ef.github.io/TASSSK3"
        h3="Cart"
        p="Product Cart"
      />
      {/* إضافة 4 بطاقات إضافية */}
      <ProjectCard
        src={ fitLift}
        link="https://you333ef.github.io/GAMEEE"
        h3="XO"
        p=" Wep Game"
      />
      <ProjectCard
        src={ hipsster}
        link="https://you333ef.github.io/TODO"
        h3="TODO"
        p="TODO List"
      />
      <ProjectCard
        src={freshBurger}
        link="https://mic-landing-page.vercel.app"
        h3="Landing Page"
        p="Responsive"
      />
      <ProjectCard
        src={viberr}
        link="https://twice-task-landing-t8jp.vercel.app/"
        h3="Viva"
        p="VIVA DECOR"
      />
    </div>
  </section>
  );
}

export default Projects;
