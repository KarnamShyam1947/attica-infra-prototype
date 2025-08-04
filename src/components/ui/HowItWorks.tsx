import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

type Step = {
  icon: React.ReactNode;
  number: number;
  title: string;
  description: string;
  image: string;
};

interface HowItWorksProps {
  steps: Step[];
  title?: string;
  subtitle?: string;
}

const HowItWorksUI: React.FC<HowItWorksProps> = ({
  steps,
  title = 'How it Works',
  subtitle = 'Follow each step to complete your journey with us.',
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-10 bg-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg text-gray-600">{subtitle}</p>
        </div>

        {/* Stepper */}
        <div className="relative max-w-4xl mx-auto mb-16">
          {/* Background Line */}
          <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-300 z-0" />

          {/* Progress Line */}
          <div
            className="absolute top-5 left-0 h-0.5 bg-blue-600 z-10 transition-all duration-500"
            style={{
              width: `${(activeIndex / (steps.length - 1)) * 100}%`,
            }}
          />

          {/* Step Circles */}
          <div className="flex justify-between relative z-20">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center w-full">
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold transition-transform duration-300 ${activeIndex === index ? 'bg-blue-600 scale-110' : 'bg-gray-300'
                    }`}
                >
                  {step.number}
                </div>
                <div
                  className={`mt-2 text-sm text-center ${activeIndex === index ? 'text-blue-600 font-medium' : 'text-gray-500'
                    }`}
                >
                  {step.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image + Description Carousel */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000 }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          loop
          modules={[Autoplay]}
          className="max-w-4xl mx-auto"
        >
          {steps.map((step, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl w-full mx-auto flex flex-col items-center text-center min-h-[600px]">
                {/* Icon and Heading */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white mb-4">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-base mb-6">{step.description}</p>

                {/* Full-Width Image */}
                <img
                  src={step.image}
                  alt={step.title}
                  className="h-[400px] rounded-lg w-auto object-contain mx-auto"
                />

              </div>
            </SwiperSlide>

          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HowItWorksUI;
