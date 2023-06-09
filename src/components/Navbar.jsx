import React from "react";
import {HiOutlineHome} from 'react-icons/hi'

const Navbar = () => {
  return <header className={`flex justify-between p-5 top-0 z-0 shadow-md left-0 right-0 fixed bg-slate-200 `}>
    <div className="flex  ">
        
        <div className="flex space-x-2 justify-between items-center font-light text-2l text-white">
        <button className="flex space-x-2 hover:cursor-pointer bg-lime-500 px-5 py-2 hover:bg-lime-600
        rounded-md shadow-md items-center shadow-slate-500 hover:shadow-slate-800 leading-tight uppercase " >
            <HiOutlineHome className="text-white mr-1"/> Home </button>
        </div>
    </div>

    <div className="flex space-x-2 justify-between items-center font-light text-2xl text-black uppercase"> 
    <p >Lottery</p>

    </div>

    <div className="flex text-white ">
        <div className="flex space-x-8 justify-between items-center font-normal text-sm ">
        <button className="hover:cursor-pointer bg-lime-500 px-5 py-2 hover:bg-lime-600
        rounded-full shadow-md  shadow-slate-500 hover:shadow-slate-800 leading-tight uppercase " >Play</button>
        <button className="hover:cursor-pointer bg-lime-500 px-5 py-2 hover:bg-lime-600
        rounded-full shadow-md  shadow-slate-500 hover:shadow-slate-800 leading-tight uppercase " >connect Wallet </button>
        </div>
    </div>
   
    </header>;
};

export default Navbar;
