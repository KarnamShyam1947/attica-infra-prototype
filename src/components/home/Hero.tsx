import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80",
      title: "Building Dreams Into Reality",
      subtitle: "Quality Construction Services for Your Vision",
      buttonText: "Get Started",
      buttonLink: "#contact"
    },
    {
      image: "https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&q=80",
      title: "Expert Construction Solutions",
      subtitle: "From Concept to Completion",
      buttonText: "Our Services",
      buttonLink: "#services"
    },
    {
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
      title: "Trust in Excellence",
      subtitle: "25+ Years of Construction Experience",
      buttonText: "Learn More",
      buttonLink: "#about"
    }
  ];

  return (
    <div className="relative h-screen">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-screen">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: `url(${slide.image})`,
                filter: 'brightness(0.6)'
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <div className="text-center text-white">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">{slide.title}</h1>
                <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
                <a
                  href={slide.buttonLink}
                  className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;