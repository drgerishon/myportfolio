import React from 'react'

const test = () => {
  return (
    <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-4 flex flex-col justify-around items-center">
        <div className="w-64 h-64 mx-auto overflow-hidden rounded-xl">
          <Image src={profile} alt="" />
        </div>
        <h1 className="uppercase font-bold text-gray-500 text-7xl">
          Full stack web developer
        </h1>
        <p className="text-gray-600 text-xl max-w-sm mx-auto ">
          {' '}
          I have 3 years of experince building and designing software.
          Currently, I love to work on web development using technologies such
          as React, Tailwind, Next js, Node js and GraphQl
        </p>
        <Link href="/#me">
          <div className="group flex items-center justify-center my-8 bg-blue-500
           text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
            Know more
            <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
              <MdExpandMore size={25} />
            </span>
          </div>
        </Link>
      
      </div>
  )
}

export default test