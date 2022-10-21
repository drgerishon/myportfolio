import React from 'react';
import profile from '../public/assets/profile.png';
import Image from 'next/image';
import { MdExpandMore } from 'react-icons/md';
import Link from 'next/link';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Homepage = () => {
  return (
    <div id="home" className="max-w-screen-xl mx-auto w-full h-full pt-0 p-0">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left"></div>

      <div
        className="flex flex-col md:flex-row gap-8 shaodow-x1
    shadow-blue-300 bg-white mt-4"
      >
        <div className="w-full md:w-1/2 h-full rounded-xl p-4">
          <h1 className="animate-bounce uppercase font-bold text-red-600 text-5xl">
            Web Developer
          </h1>
          <p className="text-xl text-blue-600">
            {' '}
            Innovative, task-driven experience in Web design and development in
            identifying web-based user interactions along with designing &
            implementing highly responsive user interfaces. Proficient in
            translating design & wireframes into high-quality code. Creating
            user interfaces and impelementing new features based on users
            feedback. Adept at monitoring & maintaining frontend perfomance,
            troubleshooting & debugging Simple to complex issues. I have 3 years
            of experince building and designing Web Applications, using
            technologies such as React, Tailwind, Next js, Node js and GraphQl{' '}
          </p>
          <Link href="/Waichua cv.pdf" download={true}>
            <div
              className="group flex items-center justify-center
                my-8 text-white px-6 py-3 font-bold
                uppercase rounded-md tracking-wider cursor-pointer bg-sky-500 hover:bg-sky-700"
            >
              Click to view my resume
            </div>
          </Link>
        </div>
        <div className="w-full md:w-1/2 h-full rounded-xl p-4">
          <div className="p-4 text-left">
            <div className="w-64 h-64 mx-auto overflow-hidden rounded-xl">
              <Image
                className="transition duration-200 ease-in-out transform sm:hover:scale-105 hover:z-50"
                src={profile}
                alt=""
              />
            </div>

            <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
              <a target="_blank" href="https://linkedin.com/in/gerishonkungu/">
              <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                <FaLinkedin size={25} />
              </div>
               </a>
               <a target="_blank" href="https://github.com/drgerishon/">
              <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer">
                <FaGithub size={25} />
              </div>
                </a>
              <p className="text-1xl text-blue-600 font-sans">
                Email: gerishonk@gmail.com
              </p>
              <br />
              <p className="text-1xl text-blue-600 font-sans">
                Contact: 0708953968
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
