
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useEffect, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
const Banner = () => {
  const slides = [
    {
      id: 1,
      title: 'Elegant Wooden Furniture',
      description: 'Upgrade your home with premium wooden furniture.',
      image: '/images/banner1.jpg',
    },
    {
      id: 2,
      title: 'Modern & Stylish Designs',
      description: 'Find the perfect blend of style and comfort.',
      image: '/images/banner2.jpg',
    },
    {
      id: 3,
      title: 'Eco-Friendly & Sustainable',
      description: 'Beautiful furniture made with sustainability in mind.',
      image: '/images/banner3.jpg',
    },
    {
      id: 4,
      title: 'Luxury Living, Affordable Prices',
      description: 'Experience high-end furniture at budget-friendly rates.',
      image: '/images/banner4.jpg',
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const swiper = document.querySelector('.swiper').swiper;
    swiper.params.navigation.prevEl = prevRef.current;
    swiper.params.navigation.nextEl = nextRef.current;
    swiper.navigation.init();
    swiper.navigation.update();
  }, []);

  return (
    <section className="w-full h-[500px] sm:h-[400px] xs:h-[300px] relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="w-full h-full"
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id} className="relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-4">
              <h2 className="text-4xl sm:text-3xl xs:text-2xl font-bold">
                {slide.title}
              </h2>
              <p className="text-lg sm:text-base xs:text-sm mt-2">
                {slide.description}
              </p>
              <button className="mt-4 px-6 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition">
                Shop Now
              </button>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Arrows (Hidden on Small Screens) */}
        <div className="sm:hidden lg:block">
          <button
            ref={prevRef}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600 transition sm:hidden lg:block"
          >
            <FaArrowLeft></FaArrowLeft>
          </button>
        </div>

        <button
          ref={nextRef}
          className="absolute  top-1/2 right-4 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600 transition sm:hidden lg:block"
        >
          <FaArrowRight />
        </button>
      </Swiper>
    </section>
  );
};

export default Banner;
