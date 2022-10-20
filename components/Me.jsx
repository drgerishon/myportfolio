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
        <p className="py-4 max-w-lg text-blue-600">
          I build new projects just to tickle my brain. Am personate about web
          development and offer all solutions related to fullstack web
          development.
        </p>
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
