import React from 'react';

interface Brand {
  name: string;
  image: string;
}

const brands: Brand[] = [
  { name: 'BuildTech Corp', image: './partners/1.png' },
  { name: 'Industrial Pro', image: './partners/2.png' },
  { name: 'Storage Solutions', image: './partners/3.png' },
  { name: 'Urban Developers', image: './partners/4.png' },
  { name: 'Home Creators', image: './partners/5.png' },
  { name: 'Retail Builders', image: './partners/6.png' },
  { name: 'City Architects', image: './partners/7.png' },
  { name: 'Hotel Experts', image: './partners/8.png' },
  { name: 'Hotel', image: './partners/9.png' },
  { name: 'Hotel', image: './partners/10.png' },
  { name: 'BuildTech Corp', image: './partners/11.png' },
  { name: 'Industrial Pro', image: './partners/12.png' },
  { name: 'Storage Solutions', image: './partners/13.png' },
  { name: 'Urban Developers', image: './partners/14.png' },
  { name: 'Home Creators', image: './partners/15.png' },
  { name: 'Retail Builders', image: './partners/16.png' },
  { name: 'City Architects', image: './partners/17.png' },
  { name: 'Hotel Experts', image: './partners/18.png' },
  { name: 'Hotel', image: './partners/19.png' },
  { name: 'Hotel', image: './partners/20.png' },
];

const BrandCarousel: React.FC = () => {
  const logos = [...brands, ...brands]; // duplicate for smooth loop

  return (
    <>
      <h2 className="mt-10 text-2xl md:text-3xl font-bold text-center mb-6">Our Trusted Suppliers</h2>
      <div className="carousel-wrapper">
        <div className="carousel-track">
          {logos.map((brand, index) => (
            <img
              style={{
                height: "150px"
              }}
              key={index}
              src={brand.image}
              alt={brand.name}
              title={brand.name}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default BrandCarousel;
