import React from "react";
import Link from "next/link";
import Image from "next/image";



const  background = 'https://images.unsplash.com/photo-1464618663641-bbdd760ae84a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2Vic2l0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
const Hero = () => {
  return(
    <diV
    className=" p-32 md:px-40 "
    style={{ background: `url('${background}')  fixed no-repeat top/cover `}}
    >
      <div className="flex  items-center justify-between text-white py-5">
        <div>
          <h1 className="text-3xl font-bold"> The Ultimate Jackpot Awaits - Play Our Lottery Now </h1>
          <h2 className="text-3xl font-bold mt-1">Participate in our Lottery Draws! </h2>
          <h3 className="text-xl font-semibold mt-6"> Your Chance to Strike it Rich - Join Our Lottery Today</h3>
          <p className="mt-2" >Winning Made Easy - Play Our Lottery and Change Your Fate!</p>
        </div>
        <div  className="hidden lg:flex items-center space-x-3 font-semibold opacity-50 ">
          
          <Image
            src = "https://png.pngtree.com/png-clipart/20210311/original/pngtree-retro-style-design-of-jackpot-logo-png-image_6023680.png"
            width = '2000'
            height = '1008'
            alt ="loto logo"
            className="rounded-full w-80 z-0"
          />
          </div>
          </div>
          <div className="pb-5">
            <Link
            href={'/create'}
            className="bg-green-600 hover:bg-green-700 text-white rounded-xl cursor-pointer uppercase shadow-md
            shadow-gray-600 font-bold p-3"
            >Jackpot
            </Link>
          </div>
    </diV>
  ) 
};

export default Hero;
