import React from 'react'
import Title from '../layouts/Title'
import { portfolio, vibetalk, blogapp } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Portfolio"
          des="Built a personal portfolio using React.js, showcasing my skills, projects, and experience. Implemented a contact form for direct communication and deployed it live using GitHub Pages. Designed with a clean and responsive UI for a seamless user experience."
          src={portfolio}
          link="https://ved35.github.io/portfolio-rio/"
          gitHub="https://github.com/ved35/portfolio-rio"
        />
        <ProjectsCard
          title="vibetalk"
          des="Created a Chat-app using React.js, Tailwind-CSS and Node.js with MongoDB as the database. MongoDB with authentication and multiple color themes.	Implemented one-on-one chat using Socket.io with a typing indicator for real-time communication"
          src={vibetalk}
          link="https://vibetalk-03eu.onrender.com/"
          gitHub="https://github.com/ved35/VibeTalk"
        />
        <ProjectsCard
          title="Blog-app"
          des="Created a blog app using React.js, Tailwind-CSS and Node.js with MongoDB as the database. Implemented JWT authentication and Google OAuth for secure signup and login.	Added an admin panel to manage users and blog posts, along with pagination for post listings."
          src={blogapp}
          link=""
          gitHub="https://github.com/ved35/Blog-app"
        />
        {/* <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        /> */}
      </div>
    </section>
  );
}

export default Projects