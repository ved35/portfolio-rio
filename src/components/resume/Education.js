import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div style={{flex:1}}>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2015 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Secondary School Certificate"
            subTitle="AB School (2015 - 2016)"
            result="82%"
            des="The SSC is a “Class 10th Public Examination” which is commonly referred to as “Class 10th Board Examinations”"
          />
          <ResumeCard
            title="Higher Secondary Certificate"
            subTitle="SuperKing College (2017 - 2018)"
            result="85%"
            des="The HSC is a “Class 12th Public Examination” which is commonly referred to as “Class 12th Board Examinations”"
          />
          <ResumeCard
            title="Bachelor Of Engineering"
            subTitle="VGEC (2018 - 2022)"
            result="7.51"
            des="Bachelor of Engineering in IT is a specialized engineering program in the domain of computer and Information Technology."
          />
        </div>
      </div>
      {/* part Two */}

      <div style={{flex:1}}>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Jr. Frontend Developer"
            subTitle="Palm Infotech (june 2023 - Present)"
            result="Surat"
            des="Developed responsive websites and mobile applications, utilizing a diverse tech stack including HTML, CSS, JavaScript, React-js and React-Native for mobile. Played a key role in project planning, execution, and optimization, ensuring alignment with business objectives and user needs."
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
    </motion.div>
  );
};

export default Education;
