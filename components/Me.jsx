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
            An experienced Software developer adept in all stages of software
            development from system requirements, system design, coding, testing
            to deployment. Am proficient in an assortment of technologies such
            as JavaScript, NodeJs, ReactJs, ASP.Net, C#, MongoDB, Microsoft SQL,
            Postgres among others. Am well able to effectively self-manage
            during independent projects as well as collaborating in team
            settings
          </p>
        </div>
        <div className="flex items-center justify-center gap-10">
          <Link href="/Waichua cv.pdf" download={true}>
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
