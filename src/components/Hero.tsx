import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Hero = () => {
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&q=80',
      title: 'Stoned Stylish Socks',
      subtitle: 'Elevate your style from the ground up',
    },
    {
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80',
      title: 'Detachable Collars',
      subtitle: 'Transform any outfit instantly',
    },
    {
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80',
      title: 'Stylish Capes',
      subtitle: 'Make a statement wherever you go',
    },
  ];

  return (
    <div className="relative h-screen">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white">
                <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
                <p className="text-xl mb-8">{slide.subtitle}</p>
                <div className="space-x-4">
                  <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition-colors">
                    Shop Now
                  </button>
                  <button className="border-2 border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors">
                    Customize
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-0 left-0 right-0 text-center pb-8 text-white z-10">
        <h2 className="text-2xl font-light italic">
          Redefining Fashion Accessories, One Stitch at a Time
        </h2>
      </div>
    </div>
  );
};

export default Hero;