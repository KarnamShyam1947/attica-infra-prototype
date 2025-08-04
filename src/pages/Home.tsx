import Contact from '../components/home/Contact';
import HowItWorks from '../components/home/HowItWorks';
import Services from '../components/home/Services';
import Testimonials from '../components/home/Testimonials';
import SimpleHero from '../components/SimpleHero';

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import BrandCarousel from '../components/home/BrandsCarousel';
import Features from '../components/home/Features';


const Home = () => {
  return (
    <>
      <SimpleHero />
      {/* <About /> */}
      {/* <Hero /> */}
      <Services />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Contact />
      <BrandCarousel />
    </>
  );
};

export default Home;