import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type SlideItem = {
  id: string;
  imageUrl: string;
  alt?: string;
};

interface ImageSliderProps {
  title: string;
  data: SlideItem[];
};

const ImageSlider: React.FC<ImageSliderProps> = ({ title, data }) => {
  return (
    <div className="w-full max-w-full sm:max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto py-4 sm:py-6">
      <div className="w-full">
        <div className="flex justify-between items-center px-2 sm:px-4 mb-4">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">{title}</h3>
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={8}
          slidesPerView={1}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 12,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
          }}
          className="relative px-4 sm:px-6"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <img
                src={item.imageUrl}
                alt={item.alt || ''}
                className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-lg shadow-sm transition-transform duration-300 hover:scale-105 aspect-[4/3]"
              />
            </SwiperSlide>
          ))}
          <div
            className="swiper-button-prev !w-8 !h-8 sm:!w-10 sm:!h-10 !bg-blue-500/80 !text-white rounded-full hover:!bg-blue-600 transition duration-200 after:text-sm sm:after:text-base"
            aria-label="Previous slide"
          >
            <ChevronLeft />
          </div>
          <div
            className="swiper-button-next !w-8 !h-8 sm:!w-10 sm:!h-10 !bg-blue-500/80 !text-white rounded-full hover:!bg-blue-600 transition duration-200 after:text-sm sm:after:text-base"
            aria-label="Next slide"
          >
            <ChevronRight />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default ImageSlider;