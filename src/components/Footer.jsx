// import img from '../assets/taskie.png';
import { BiSolidGridAlt } from 'react-icons/bi';
import { AiFillInstagram } from 'react-icons/ai';
import { BsTwitter, BsFacebook } from 'react-icons/bs';

export default function Footer() {
  return (
    <div className="bg-gray-900 text-white">

      <div className=" p-3 flex justify-center  ">
        <div className="flex px-5 cursor-pointer items-center">
          <BiSolidGridAlt size={40} /> <span className="font-light text-xl">taskie</span>
        </div>
        <div className="border-l  flex w-[10%] justify-around items-center text-3xl px-5 cursor-pointer">
          <AiFillInstagram />
          <BsTwitter />
          <BsFacebook />
        </div>
      </div>

      <div className="flex text-base p-3 border-t justify-center items-center ">
        <p className='  '>Copyright © 2023 Taskie</p>
        <p className="p-3  hover:text-blue-200  cursor-pointer">Terms</p>
        <p className="p-3  hover:text-blue-200 cursor-pointer">Privacy Policy</p>
      </div>
    </div>
  );
}
