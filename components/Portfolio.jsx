import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { MdExpandMore } from 'react-icons/md';
// import profile from '../public/assets/profile.png';
// import proj2 from '../public/assets/proj2.PNG';
import proj5 from '../public/assets/proj5.PNG';
// import proj4 from '../public/assets/proj4.PNG';
import viewke from '../public/assets/viewke.PNG';
import seaenergy from '../public/assets/seaenergy.PNG'

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: 'View Ke',
      imgSrc: viewke,
      url: 'View Kenya',
    },
    {
      id: 2,
      title: 'Seahorse Energy Limited',
      imgSrc: seaenergy,
      url: 'seahorsenergy',
    },
    {
      id: 3,
      title: 'SeaEnergy',
      imgSrc: proj5,
      url: 'energyhorse.com',
    },

    // {
    //   id: 4,
    //   title: 'kanairo cafe',
    //   imgSrc: proj4,
    //   url: 'kanairocafe.com',
    // },
  
  ];
  return (
    <div id="portfolio" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2
          className="text-5xl md:text-7xl tracking-wider 
            uppercase text-blue-500 font-bold"
        >
          Sample Projects
        </h2>
        <p className="py-4 max-w-lg text-blue-600">
          Here are sample display of my past projects that i have developed in
          my jornet to become a professional wed developer
        </p>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {portfolios.map(({ id, title, imgSrc, url }) => (
            <Link key={id} href={`/portfolio/${url}`}>
              <div
                className="cursor-pointer group shadow-md
                     shadow-gray-600 overflow-hidden rounded-md"
              >
                <Image
                  className="rounded-md duration-200 hover:scale-110"
                  src={imgSrc}
                  alt={title}
                />
                <h2
                  className="text-center text-base capitalize my-4 font-light
                         duration-200 group-hover:underline underline-offset-4"
                >
                  {title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Link href="/portfolio">
            <div
              className="group flex items-center justify-center my-8
           bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider
           cursor-pointer"
            >
              all projects
              <span className="-rotate-90 duration-100 ease-in-out group-hover:translate-x-5">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
