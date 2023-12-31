import { Link } from 'react-scroll';
import homepage from '../assets/homepage.png';
import WavyText from './micro_components/WavyText'
import {motion} from 'framer-motion'

export default function Homepage() {
  return (
    <div id="homepage" className='font-poppins pt-[70px] lg:pt-[85px]'>
      <div className='flex py-6 bg-[#D8B4F8] lg:flex-row flex-col justify-center items-center'>
        <motion.div initial={{opacity:0, y: '-10vh'}} animate={{opacity: 1, y:0}} transition={{delay: 0.2}} className='lg:w-[40%] h-full lg:text-left text-center px-10'>
          <h1 className='text-2xl flex lg:items-start justify-center flex-col items-center lg:text-left text-center lg:text-5xl font-semibold py-3 text-white '><span className='text-purple-600'>Taskie: </span> 
          <WavyText text="Streamline Your Tasks," delay={0.1} replay={true}/> 
          <WavyText text="Simplify Your Work" delay={0.2} replay={true}/> 
          </h1>
          <p className='text-base lg:text-xl mb-5 text-white'>
            Taskie is your all-in-one solution for seamless task management.
            Effortlessly organize projects, collaborate in real-time, and
            achieve more. Experience efficiency like never before.
          </p>
          <div >
              <span className='py-3 my-3 mb-10 px-4 cursor-pointer text-white font-semibold hover:scale-110 hover:font-bold bg-blue-500 rounded-xl '>
                  <Link  to="contact">Start Organizing</Link>
              </span>
          </div>
        </motion.div>
        <div>
          <img src={homepage} alt="" />
        </div>
      </div>
      
    </div>

  );
}
