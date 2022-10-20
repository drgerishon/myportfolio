import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import profile from "../../public/assets/profile.png";
// import proj2 from '../../public/assets/proj2.PNG';
import proj5 from '../../public/assets/proj5.PNG';
import viewke from '../../public/assets/viewke.PNG';
import seaenergy from '../../public/assets/seaenergy.PNG';

export const getServerSideProps = async () => {
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
      title: 'Gshon web Solutions',
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

  return {
    props: { portfolios },
  };
};

const OnePortfolio = ({ portfolios }) => {
  return (
    <div id="portfolio" className="w-full">
      <div className="max-w-screen-xl mx-auto pt-24 p-4 text-center md:text-left">
        <h2
          className="text-5xl md:text-7xl tracking-wider 
            uppercase text-blue-500 font-bold pb-16"
        >
          Portfolio
        </h2>

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
      </div>
    </div>
  );
};

export default OnePortfolio;
