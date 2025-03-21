import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import reviews from '../../reviews/reviews';

const ClientReviews = () => {
  return (
    <section data-aos="fade-up" className="py-12  bg-gray-200 mt-5">
      <div>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          💬 Client Reviews
        </h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          // navigation={true}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 4 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwipe "
        >
          <div className="bg-blue-gray-900 grid grid-cols-1">
            {reviews.map((review, index) => (
              <div>
                <SwiperSlide key={index}>
                  <div className="bg-white  py-10  rounded-lg shadow-lg flex flex-col  items-center text-center">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-20 h-20 rounded-full border-4 border-blue-500"
                    />
                    <h3 className="text-xl font-semibold text-gray-700 mt-4">
                      {review.name}
                    </h3>
                    <p className="text-gray-600 mt-2 italic">
                      "{review.feedback}"
                    </p>
                  </div>
                </SwiperSlide>
              </div>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default ClientReviews;
