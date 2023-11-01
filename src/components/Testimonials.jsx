/* eslint-disable react/prop-types */
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';

const testimonials = [
  { id: 1, name: 'John Doe', quote: 'This product is amazing! I highly recommend it.' },
  { id: 2, name: 'Jane Smith', quote: "The service provided was exceptional. I'm a satisfied customer." },
  { id: 3, name: 'Michael Johnson', quote: 'Outstanding experience. Will definitely come back.' },
  // Add more dummy data as needed
];

function Testimonial({ testimonial }) {
  return (
    <div className="w-full h-full">
      <h2>{testimonial.name}</h2>
      <p>{testimonial.quote}</p>
    </div>
  );
}

export default function Testimonials() {
  return (
    <div>
      <Splide
        options={{
          rewind: true,
          width: 1600,
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
  );
}
