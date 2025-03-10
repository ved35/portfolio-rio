import React, { useState } from 'react'
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { ProfileImg } from "../../assets/index"
import { navLinksdata } from '../../constants';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div className='flex flex-row items-center gap-4 ml-4'>
        <img src={ProfileImg} alt="logo" className='rounded-full h-[50px] w-[50px]' />
        <p className='font-bold text-2xl '>Ved Patel</p>
        {/* <img src={logo} alt="logo" /> */}
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <div className='flex flex-row items-center gap-4 ml-4'>
                  <img src={ProfileImg} alt="logo" className='rounded-full h-[35px] w-[35px]' />
                  <p className='font-bold text-xl '>Ved Patel</p>
                </div>
                <p className="text-sm text-gray-400 mt-2">
                  I am a web and app developer with experience in full-stack projects using React, React Native, and Node.js. I have a degree in Information Technology from Gujarat Technological University, B.E. I have worked on CRM systems, fintech applications, and real-time chat platforms, focusing on authentication, payments, and subscriptions. I specialize in building scalable, user-friendly applications with modern web technologies. With a strong problem-solving mindset, I collaborate with clients to refine and enhance applications. Passionate about innovation, I continuously upgrade my skills. I'm always ready to take a new challenges and deliver top-notch results.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
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
                  <span className="bannerIcon" onClick={() => {
                    window.location.href = 'https://www.linkedin.com/in/patel-ved';
                  }}>
                    <FaLinkedinIn />
                  </span>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar