import React from 'react';
import html from '../public/assets/experience/html.png';
import css from '../public/assets/experience/css.png';
import javascript from '../public/assets/experience/javascript.png';
import reactImage from '../public/assets/experience/reactImage.png';
import nextjs from '../public/assets/experience/nextjs.png';
import tailwind from '../public/assets/experience/tailwind.png';
import graphql from '../public/assets/experience/graphql.png';
import node from '../public/assets/experience/node.png';
import Image from 'next/image';

javascript;

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Node JS',
      src: node,
    },
    {
      id: 2,
      title: 'REACT',
      src: reactImage,
    },
    {
      id: 3,
      title: 'Next JS',
      src: nextjs,
    },
    {
      id: 4,
      title: 'HTML',
      src: html,
    },
    {
      id: 5,
      title: 'CSS',
      src: css,
    },
    {
      id: 6,
      title: 'JavaScript',
      src: javascript,
    },
    {
      id: 7,
      title: 'Tailwind',
      src: tailwind,
    },
    {
      id: 8,
      title: 'GrapgQl',
      src: graphql,
    },
  ];
  return (
    <div id="experience" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2
          className="text-5xl md:text-7xl tracking-wider 
            uppercase text-blue-500 font-bold"
        >
          experience
        </h2>
        <p className="py-4 max-w-lg text-blue-600">
          I have 3 years of experience working with below technologies...
        </p>

        <div className="grid lg:grid-cols-4 gap-8">
          {experiences.map(({ id, title, src }) => (
            <div
              key={id}
              className="flex flex-col
                lg:flex-row gap-10 lg:gap-0 items-center justify-between
                p-6 shadow-lg rounded-xl hover:scale-105 ease-in-out
                duration-300 odd:shadow-rose-400 even:shadow-blue-400"
            >
              <Image src={src} width="64px" height="64px" alt={title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
