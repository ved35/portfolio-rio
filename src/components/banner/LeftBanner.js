import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedinIn, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Web Developer","App Developer"],
      // words: ["Professional Coder.", "Full Stack Developer.","Web Developer","App Developer"],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Ved Patel</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I am a web and app developer with experience in full-stack projects using React, React Native, and Node.js. I have a degree in Information Technology from Gujarat Technological University, B.E. I have worked on CRM systems, fintech applications, and real-time chat platforms, focusing on authentication, payments, and subscriptions. I specialize in building scalable, user-friendly applications with modern web technologies. With a strong problem-solving mindset, I collaborate with clients to refine and enhance applications. Passionate about innovation, I continuously upgrade my skills. I'm always ready to take a new challenges and deliver top-notch results.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            {/* <span className="bannerIcon">
              <FaFacebookF />
            </span>
            <span className="bannerIcon">
              <FaTwitter />
            </span> */}
            <span className="bannerIcon" onClick={()=>{
                    window.location.href = 'https://www.linkedin.com/in/patel-ved';
                  }}>
              <FaLinkedinIn />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaNodeJs />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner