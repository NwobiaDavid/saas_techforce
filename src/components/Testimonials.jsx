/* eslint-disable react/prop-types */
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';

import img from '../assets/testimonial-dummy1.png'

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    img: img,
    quote: 'This product is amazing! I highly recommend it.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    img: img,
    quote: "The service provided was exceptional. I'm a satisfied customer.",
  },
  {
    id: 3,
    name: 'Michael Johnson',
    img: img,
    quote: 'Outstanding experience. Will definitely come back.',
  },
  // Add more dummy data as needed
];

function Testimonial({ testimonial }) {
  return (
    <div className="lg:w-full w-[80%] flex justify-center items-center flex-col h-full">
      <img className='h-[50px] ' src={img} alt="dummy image" />
      <h2 className='text-lg font-semibold '>{testimonial.name}</h2>
      <p className='text-base '>{testimonial.quote}</p>
    </div>
  );
}

export default function Testimonials() {

  
  return (
    <div id='testimonials'>
      <div className='flex p-3 justify-center items-center flex-col'>
        <h1 className='text-xl '>testimonials</h1>
        <p className='text-2xl text-center lg:text-left font-semibold'>check out what people are saying about us</p>
      </div>
      <div className='flex  justify-center items-center'>
        <div className=" rounded-2xl w-[90%] lg:w-[70%] justify-center items-center flex bg-purple-200">
          <Splide
            options={{
              rewind: true,
              width: 800,
              gap: '1rem',
              height: 400,
              type: 'loop',
              perPage: 1, // Show one testimonial per slide
              focus: 1,
              omitEnd: true,
            }}
            hasTrack={false}
            aria-label="Testimonials"
          >
            <SplideTrack data-splide-track>
              {testimonials.map((testimonial) => (
                <SplideSlide key={testimonial.id}>
                  <Testimonial testimonial={testimonial} />
                </SplideSlide>
              ))}
            </SplideTrack>
          </Splide>
        </div>
      </div>
    </div>
  );
}
