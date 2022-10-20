import React from 'react';
// import profile from '../../public/assets/profile.png';
import proj2 from '../../public/assets/proj2.PNG';
import proj5 from '../../public/assets/proj5.PNG';
import proj4 from '../../public/assets/proj4.PNG';
import viewke from '../../public/assets/viewke.PNG';
import seaenergy from '../../public/assets/seaenergy.PNG';

import { FaGithub } from 'react-icons/fa';
import { AiOutlineCaretRight } from 'react-icons/ai';
import { BiChevronLeft } from 'react-icons/bi';
import Link from 'next/link';
import Image from 'next/image';

const portfolios = [
  {
    id: 1,
    title: 'View Ke',
    imgSrc: viewke,
    url: 'View Kenya',
    link: "https://viewsasa.vercel.app/",
    githubLink: "https://github.com/drgerishon/view_254"
  },
  {
    id: 2,
    title: 'Seahorse Energy Limited',
    imgSrc: seaenergy,
    url: 'seahorsenergy',
    link: "https://seahorsenergy.com/",
    githubLink: "https://github.com/bond50/seahorse"
  },
  {
    id: 3,
    title: 'Gshon web Solutions',
    imgSrc: proj5,
    url: 'energyhorse.com',
    link: "https://gshonwebsolutions.vercel.app/products/production",
    githubLink: "https://github.com/drgerishon/gshon_solutions"
  },
  {
    id: 4,
    title: 'kanairo cafe',
    imgSrc: proj4,
    url: 'kanairocafe.com',
  },
 
];

const getPortfolioFrom = (url) => portfolios.filter((p) => p.url === url)[0];

export async function getStaticPaths() {
  const paths = portfolios.map((p) => ({
    params: { id: p.url },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const portfolio = getPortfolioFrom(params.id);

  return {
    props: { portfolio },
  };
}

const OnePortfolio = ({ portfolio: { title, imgSrc, link, githubLink} }) => {
  return (
    <div className="h-fit w-full text-center">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-8 flex flex-col">
        <div className="flex">
          <Link href="/portfolio">
            <div
              className="flex items-center justify-center my-8 text-indigo-500
             font-bold capitalize cursor-pointer"
            >
              <BiChevronLeft size={25} /> Back
            </div>
          </Link>
        </div>
        <h1
          className="capitalize text-4xl mt-2 mb-8 text-center
        md:text-left font-bold text-blue-500 tracking-wider"
        >
          {title}
        </h1>
        <div className="relative w-96 h-56 mx-auto overflow-hidden my-8">
          <Image src={imgSrc} alt="bla" layout="fill" object="cover" />
        </div>
        <h2 className="text-center md:text-left my-4 text-2xl font-bold">
          Description
        </h2>
        <p>Kindly check the project descriprtion demo and repo from github</p>
        <div className="flex items-center justify-center gap-10">
          <Link href={link} target="_blank" rel="noopener noreferrer">
            <div
              className="group flex items-center justify-center
                my-8 bg-blue-500 text-white px-6 py-3 font-bold
                uppercase rounded-md tracking-wider cursor-pointer"
            >
              Demo
              <span className="duration-100 ease-in">
                <AiOutlineCaretRight size={25} className="ml-2" />
              </span>
            </div>
          </Link>
          <Link href={githubLink} target="_blank" rel="noopener noreferrer">
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
                <FaGithub size={25} className="ml-2" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OnePortfolio;
