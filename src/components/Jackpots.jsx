import Image from "next/image";
import Link from "next/link";
import React from "react";

const Jackpots = ({jackpots}) => {
  return (
  <div className="bg-slate-100 pt-5">
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center text-sm text-blue-800"> Lottery Jackpots</h1>
      <p className="text-center text-sm text-blue-600"> our lottery platform is reliable <br/>
      Which is out we are the best choice.
      </p>
    </div>
    
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4
      lg:gap-3 py-10 w-4/5 mx-auto">
        {/* Hello */}
        {jackpots?.map((jackpot, i) => (
          <Jackpot jackpot={jackpot} key={i} />
        ))}
      </div>
  </div>
  )};

const Jackpot = ({jackpot}) => {
  return (
    <div className="w-full shadow-lg shadow-blue-300 rounded-xl overflow-hidden bg-stone-500 my-2 px-3 py-5">
      <div className="flex justify-start item-center space-x-2 ">
        <Image
         width={100}
         height = {512}
         src={jackpot.image} 
         alt= "icon"
         className="rounded-lg w-20 "/>
         <div>
          <p className="text-blue-300"> Upto: {jackpot.prize}  ETH</p>
          <p className="text-sm text-gray-300">Draws On: {jackpot.drawsAt}</p>
         </div>
      </div>
      <div>
        <p className="font-semibold pb-2 text-blue-200">{jackpot.title}</p>
        <p className="text-sm leading-5 pb-6 text-gray-300"> {jackpot.description}</p>
      </div>
      <Link href={'/jackpots/' + jackpot.id}
      className="bg-blue-500 hover:bg-cyan-500 py-2 px-5
      rounded-md text-white font-semibold" 
      >
      PLAY NOW</Link>
    </div>
  )
}

export default Jackpots;
