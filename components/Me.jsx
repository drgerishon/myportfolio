import React from 'react';
import { MdExpandMore } from 'react-icons/md';
import Link from 'next/link';

const Me = () => {
  return (
    <div id="me" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
         About me
        </h2>
        <div className="shadow-xl shadow-blue-300 my-8 px-8">
          <p className="py-4 max-w-lg mx-auto text-blue-600">
          Innovative, task-driven experience in Web design and development in identifying web-based user interactions along with designing & implementing highly responsive user interfaces. Proficient in translating design & wireframes into high-quality code. Creating user interfaces and impelementing new features based on user's feedback. Adept at monitoring & maintaining frontend perfomance, troubleshooting & debugging Simple to complex issues. I have 3 years of experince building and designing Web Applications, using technologies such as React, Tailwind, Next js, Node js and GraphQl 
          </p>
          
        </div>
        <div className="flex items-center justify-center gap-10">
          <Link href="/Waichua_cv.pdf" download={true}>
            <div
              className="group flex items-center justify-center
                my-8 bg-blue-500 text-white px-6 py-3 font-bold
                uppercase rounded-md tracking-wider cursor-pointer"
            >
              view resume
              <span
                className="-rotate-90 duration-100 ease-in-out
                    group-hover:rotate-0"
              >
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
          <Link href="/#portfolio">
            <div
              className="group flex items-center justify-center
                my-8 bg-blue-500 text-white px-6 py-3 font-bold
                uppercase rounded-md tracking-wider cursor-pointer"
            >
              my portfolio
              <span
                className="-rotate-90 duration-100 ease-in-out
                    group-hover:1rotate-180"
              >
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Me;
