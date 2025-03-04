import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div style={{flex:1}}>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">june 2023 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Jr. Full-stack Developer"
            subTitle="Palm Infotech (june 2023 - novemeber 2024)"
            result="Surat"
            des="Work on the frontend of Onepay, a fintech product-based project, using React Native and React.js. Collaborated with testers to ensure high-quality releases and worked with clients to understand and implement new requirements.	Added subscription management, chat functionality, and Google OAuth login in a service-based React Native app.Utilized Node.js for authentication and implemented Socket.io for real-time communication"
            height
          />
          {/* <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          /> */}
        </div>
      </div>
      <div style={{flex:1}}>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Traning Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Internship"
            subTitle="Toshal Infotech (jan 2022 - may 2020)"
            result="Surat"
            des="Created a web app to help manage customer information and interactions more efficiently.	Used Node.js along with HTML and CSS to build the application, focusing on user-friendly design and functionality.Worked closely with team members to understand user needs and deliver a responsive interface.	Improved data organization and tracking, helping users stay connected with customers. Developed problem-solving and teamwork skills through active collaboration and project challenges."
            height
          />
          <ResumeCard
            title="Internship"
            subTitle="TOPS Teachnologies (june 2022 - april 2023)"
            result="Surat"
            des="Gained practical experience in web and mobile development during an internship at TOPS Teachnologies. Worked with React.js and React Native to contribute to the development of responsive web applications and cross-platform mobile apps, collaborating with senior developers to deliver high-quality solutions."
            height
            
          />
          {/* <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          /> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
