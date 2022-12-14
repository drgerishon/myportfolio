import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {
  FaBars,
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaTimes,
} from 'react-icons/fa';

const Navbar = () => {
  const [navigaton, setNavigation] = useState(false);
  const [pageScroll, setpageScroll] = useState(false);

  useEffect(() => {
    const sub = window.addEventListener('scroll', () => {
      setpageScroll(window.scrollY >= 90);

      return sub;
    });
  }, []);
  //create array of link and map
  const links = [
    {
      id: 1,
      link: 'home',
    },
    {
      id: 2,
      link: 'portfolio',
    },
    {
      id: 3,
      link: 'experience',
    },
    {
      id: 4,
      link: 'me',
    },
    {
      id: 5,
      link: 'contact',
    },
  ];
  return (
    <div
      className={`w-full h-20 z-10 fixed  bg-gray-500 text-black duration-300 ease-in-out ${
        pageScroll && 'bg-black text-[#fff]'
      }`}
    >
      <div className="flex justify-between items-center w-full h-full max-w-screen-xl mx-auto p-4">
        <Link href="/">
          <h1 className="text-3xl lg:text-4xl font-bold uppercase tracking-wider text-white cursor-pointer hover:text-red-600">
            Gerishon Waichua
          </h1>
        </Link>

        <div className="flex">
          <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
              <Link key={id} href={`/#${link}`}>
                <li className="ml-10 text-sm uppercase cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider">
                  {link}
                </li>
              </Link>
            ))}
          </ul>

          {/* mobile */}
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setNavigation(true)}
          >
            <FaBars size={30} />
          </div>
        </div>
      </div>
      <div
        className={
          navigaton
            ? 'md:hidden fixed left-0 top-0 w-full h-full bg-black/70 backdrop-blur'
            : ''
        }
      >
        <div
          className={
            navigaton
              ? 'fixed left-0 top-0 w-4/5 h-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-10 ease-in duration-500'
              : 'fixed top-0 left-[-100%] p-10 h-full ease-in duration-500'
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/#home">
                <h2
                  onClick={() => setNavigation(false)}
                  className="text-3xl font-bold uppercase underline underline-offset-2
                            tracking-wider cursor-pointer"
                >
                  Gerishon Waichua
                </h2>
              </Link>
              <div
                onClick={() => setNavigation(false)}
                className="p-3 cursor-pointer"
              >
                <FaTimes size={30} />
              </div>
            </div>
          </div>
          <div className="mt-24 flex flex-col h-fit gap-20">
            <ul className="uppercase">
              {links.map(({ id, link }) => (
                <Link key={id} href={`/#${link}`}>
                  <li
                    onClick={() => setNavigation(false)}
                    className="py-4 text-2xl tracking-wider cursor-pointer"
                  >
                    {link}
                  </li>
                </Link>
              ))}
            </ul>
            <div>
              <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
                <div className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer">
                  <FaLinkedin size={25} />
                </div>
                <div className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer">
                  <FaFacebook size={25} />
                </div>
                <div className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer">
                  <FaGithub size={25} />
                </div>
                <div className="flex items-center justify-center rounded-full shadow-md shadow-white p-3 cursor-pointer">
                  <FaTwitter size={25} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
