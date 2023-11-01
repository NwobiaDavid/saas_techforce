import { useRef, useEffect, useState } from 'react';
import {motion} from 'framer-motion'

import img1 from '../assets/features/icon-content-folder_2x.png'
// import img2 from '../assets/features/icon-object-book_2x.png'
// import img3 from '../assets/features/icon-object-leaf_2x.png'
// import img4 from '../assets/features/icon-object-megaphone_2x.png'

export default function Features() {
    const features = [
        {id: 1, header: 'Task Organization:', img: img1, desc: "Easily create, assign, and categorize tasks within projects. Stay on top of your to-dos with intuitive task management. Taskie ensures you never miss a deadline."},
        {id: 2, header: 'Real-time Collaboration:',img: img1, desc: "Collaborate seamlessly with team members in real-time. Discuss tasks, share files, and provide updates instantly. Boost teamwork and productivity effortlessly."},
        {id: 3, header: 'Visual Progress Tracking:',img: img1, desc: "Track project progress visually with interactive charts and timelines. Understand your team's achievements and upcoming milestones at a glance. Stay informed, stay ahead."},
        {id: 4, header: 'Smart Notifications:',img: img1, desc: "Receive intelligent notifications about task updates, approaching deadlines, and team mentions. Taskie keeps you in the loop without overwhelming you, ensuring you're always aware."},
        {id: 5, header: 'Customizable Workflows:',img: img1, desc: "Tailor Taskie to your unique workflow. Customize task statuses, labels, and priorities. Adapt Taskie to match your team's specific needs and enhance productivity."},
        {id: 6, header: 'Customizable Workflows:',img: img1, desc: "Tailor Taskie to your unique workflow. Customize task statuses, labels, and priorities. Adapt Taskie to match your team's specific needs and enhance productivity."}
    ];

    const [isVisible, setIsVisible] = useState(false);

    const featuresRef = useRef(null);
  
    const featuresVar = {
      hidden: {
        opacity: 0,
        y: '-10vh'
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: 'spring',
          delay: 0.3,
          staggerChildren: 0.4
        }
      }
    };
  
    const childrenVar = {
      hidden: {
        opacity: 0,
        y: '-10vh'
      },
      visible: {
        opacity: 1,
        y: 0
      }
    };

    useEffect(() => {
      const handleScroll = () => {
        if (featuresRef.current) {
          const rect = featuresRef.current.getBoundingClientRect();
          setIsVisible(rect.top < window.innerHeight - 100);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <div id='features' ref={featuresRef} className='flex py-10 justify-center flex-col items-center'>
      <div className='lg:w-[50%] w-full text-center p-3'>
        <p className='text-lg'>what taskie can do</p>
        <h1 className='text-2xl font-semibold '>Discover the Power of Effortless Task Management</h1>
      </div>
      <motion.div  variants={featuresVar}
        initial="hidden"
         animate={isVisible ? 'visible' : 'hidden'} className='grid gap-5 justify-center items-center grid-cols-1 lg:grid-cols-3'>
                   {features.map(item => (
                    <motion.div whileHover={{scale: 1.05}} variants={childrenVar} className='p-3 cursor-pointer rounded-lg flex flex-col justify-center items-center h-[250px] w-[300px] bg-[#FBF0B2] ' key={item.id}>
                    <div className='flex justify-start w-full px-2 mb-2 py-1 bg-white rounded-xl '><img className='h-[50px] ' src={item.img} alt="" /></div>
                        <h1 className='text-xl pt-2 pb-1 font-semibold '>{item.header}</h1>
                        <p>{item.desc}</p>
                    </motion.div>
                ))}

      </motion.div>
    </div>
  )
}
