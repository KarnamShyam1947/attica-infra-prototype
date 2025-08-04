import React from 'react';
import Slider from 'react-slick';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NextArrow = ({ onClick, className, style }) => (
  <button
    onClick={onClick}
    className={`${className} !right-4 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-200`}
    style={{ ...style, display: 'block' }}
  >
    <ChevronRight className="w-6 h-6 text-blue-600" />
  </button>
);

const PrevArrow = ({ onClick, className, style }) => (
  <button
    onClick={onClick}
    className={`${className} !left-4 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-200`}
    style={{ ...style, display: 'block' }}
  >
    <ChevronLeft className="w-6 h-6 text-blue-600" />
  </button>
);

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const testimonials = [
    {
      name: "Rajesh Sharma",
      position: "Property Developer",
      image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKkAAACUCAMAAADf7/luAAAAP1BMVEWoqa3///+lpqqio6f8/Pzl5eaoqavx8fG9vsDBwsTs7O3i4uPo6Omio6Xa2tumqq3R0tSys7a5ub3JycubnaGaB+a7AAAEFklEQVR4nO2c63KrMAyEQQbscAsOef9nPQaHJm0agu2VyOnwzXT6d2tbK8sSzbKDg4ODg4ODg4ODv0w1sbeIv8b/sKAVUae6GfdL0d56XkBEyo5D0+qJuuxHS4o+Ti2RNUOd/0T3J/tRYkmZ/lnml9iPOQZOpy5e6Jwo9PgR60rZqFdk3sSOmdpT5Nn9KFO+1TlRn3aV6ja+X9v3bzR7HgF1eb/xd/SJ9koKaty8oDPF0O0jVQ1BOnP3Z/WZ+Ak4u2hqwoTOtPJSs2uMUCdVPK4oTmiel8JHlfpIoc6tRKWqMVpong+COYBsmD39wAge1VcXp21oKyWVAo30iV5IKdlEoXl+kZHape39hBYJKnVKFprnYychNX1JZYKKTkkOtTAKKI1No9+p+YWmB76HPfxDL6UvabjD/xpSj6xRMCuFbT579u9Qm+9SKu+idtuq+y20zCGFsH0Pr/lTUIG/TsF6UEEJyuPSFF+hQilVyU8GVqW40J/v04zFX3xJ+owrUhnXFKm05GyzoJXycShlABxRjEBdilMo1E8H1myKzFGsRR8ZYN4/sSq1uLuU5q35qIUpZa6jO5xNlbzVCV1gSkdepVUHCynu5/4O89jjAurKrLRCbT+rR3kwPlVYdqGghNrzd6Uw5l9IvPRDXvsa1mpvoQIotSJKk1qRnqkhya+0qpIfp/SkUqLRm3r3KwS89Ebi/ks2o1XKM2orJdQP7MabqlwnelYa7/9yQm/EDiMURnxqji5RUuWFTqsabqviW3+TmoWWf7WlfQboKfCZqtlhAG2hM9stQDOXeG9QduMAatHYvUdls40zvbaj8446M7M9qGpjl7uedFSRGsN8qh7Ix76sUupMhJ8a+dl+snFPFLXQUNeXThpiL9OF3ASyO2kqqZLWs1+dBZyAsugFvTEvK79S2uiga7QSaQAzjKD5p2Vh3RPucTnYYJdvnPGdVVzftOCd7AVNHy6UbM4K7URPcF2t4UInqRwpQOGFzu+o8LACRv0j+Ok+aBf6EWzv3N1JTJED29CPQAvBikC9nd8ooK8VwBb0M8imNIM/PdLAFjXysWw7mKN6dqUIs9A8B1WrzHs/gfm4Dzod+wrM/vMZ1B1Ea5ol3T/TJH+GBPzUYJ3kworV8x9J9X+RcPKkloBSS+oK68QlFROa2E5VEg61kPIdEuQzyO3EL2pV4b6H2YKOLlUFA98TH/7Yh4j3tJEXFbH0dMfESRXK+I+UcWOJV+FTOhH1v12ELcoTZVRKLpHeibmnIMfMtxMzmcj2vLNO+ONPVUmbqacNHqqo0v6RSDw2WKnZR2h49MNmzEOpQ0s/3Nx+KKEhJZ/zFwJHPpneyrcQ+J6eNLaZRh24/XskKE/YRB37i+kKYbPJO6VSz/C7T/0DHHE7Lrh0vzsAAAAASUVORK5CYII=",
      quote: "Attica Infra has exceeded our expectations with their exceptional construction quality and timely delivery. Their attention to detail is remarkable.",
      rating: 5
    },
    {
      name: "Priya Patel",
      position: "Business Owner",
      image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKkAAACUCAMAAADf7/luAAAAP1BMVEWoqa3///+lpqqio6f8/Pzl5eaoqavx8fG9vsDBwsTs7O3i4uPo6Omio6Xa2tumqq3R0tSys7a5ub3JycubnaGaB+a7AAAEFklEQVR4nO2c63KrMAyEQQbscAsOef9nPQaHJm0agu2VyOnwzXT6d2tbK8sSzbKDg4ODg4ODg4ODv0w1sbeIv8b/sKAVUae6GfdL0d56XkBEyo5D0+qJuuxHS4o+Ti2RNUOd/0T3J/tRYkmZ/lnml9iPOQZOpy5e6Jwo9PgR60rZqFdk3sSOmdpT5Nn9KFO+1TlRn3aV6ja+X9v3bzR7HgF1eb/xd/SJ9koKaty8oDPF0O0jVQ1BOnP3Z/WZ+Ak4u2hqwoTOtPJSs2uMUCdVPK4oTmiel8JHlfpIoc6tRKWqMVpong+COYBsmD39wAge1VcXp21oKyWVAo30iV5IKdlEoXl+kZHape39hBYJKnVKFprnYychNX1JZYKKTkkOtTAKKI1No9+p+YWmB76HPfxDL6UvabjD/xpSj6xRMCuFbT579u9Qm+9SKu+idtuq+y20zCGFsH0Pr/lTUIG/TsF6UEEJyuPSFF+hQilVyU8GVqW40J/v04zFX3xJ+owrUhnXFKm05GyzoJXycShlABxRjEBdilMo1E8H1myKzFGsRR8ZYN4/sSq1uLuU5q35qIUpZa6jO5xNlbzVCV1gSkdepVUHCynu5/4O89jjAurKrLRCbT+rR3kwPlVYdqGghNrzd6Uw5l9IvPRDXvsa1mpvoQIotSJKk1qRnqkhya+0qpIfp/SkUqLRm3r3KwS89Ebi/ks2o1XKM2orJdQP7MabqlwnelYa7/9yQm/EDiMURnxqji5RUuWFTqsabqviW3+TmoWWf7WlfQboKfCZqtlhAG2hM9stQDOXeG9QduMAatHYvUdls40zvbaj8446M7M9qGpjl7uedFSRGsN8qh7Ix76sUupMhJ8a+dl+snFPFLXQUNeXThpiL9OF3ASyO2kqqZLWs1+dBZyAsugFvTEvK79S2uiga7QSaQAzjKD5p2Vh3RPucTnYYJdvnPGdVVzftOCd7AVNHy6UbM4K7URPcF2t4UInqRwpQOGFzu+o8LACRv0j+Ok+aBf6EWzv3N1JTJED29CPQAvBikC9nd8ooK8VwBb0M8imNIM/PdLAFjXysWw7mKN6dqUIs9A8B1WrzHs/gfm4Dzod+wrM/vMZ1B1Ea5ol3T/TJH+GBPzUYJ3kworV8x9J9X+RcPKkloBSS+oK68QlFROa2E5VEg61kPIdEuQzyO3EL2pV4b6H2YKOLlUFA98TH/7Yh4j3tJEXFbH0dMfESRXK+I+UcWOJV+FTOhH1v12ELcoTZVRKLpHeibmnIMfMtxMzmcj2vLNO+ONPVUmbqacNHqqo0v6RSDw2WKnZR2h49MNmzEOpQ0s/3Nx+KKEhJZ/zFwJHPpneyrcQ+J6eNLaZRh24/XskKE/YRB37i+kKYbPJO6VSz/C7T/0DHHE7Lrh0vzsAAAAASUVORK5CYII=",
      quote: "Working with Attica Infra was a great experience. Their team's professionalism and expertise made our commercial project a huge success.",
      rating: 5
    },
    {
      name: "Amit Verma",
      position: "Real Estate Investor",
      image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKkAAACUCAMAAADf7/luAAAAP1BMVEWoqa3///+lpqqio6f8/Pzl5eaoqavx8fG9vsDBwsTs7O3i4uPo6Omio6Xa2tumqq3R0tSys7a5ub3JycubnaGaB+a7AAAEFklEQVR4nO2c63KrMAyEQQbscAsOef9nPQaHJm0agu2VyOnwzXT6d2tbK8sSzbKDg4ODg4ODg4ODv0w1sbeIv8b/sKAVUae6GfdL0d56XkBEyo5D0+qJuuxHS4o+Ti2RNUOd/0T3J/tRYkmZ/lnml9iPOQZOpy5e6Jwo9PgR60rZqFdk3sSOmdpT5Nn9KFO+1TlRn3aV6ja+X9v3bzR7HgF1eb/xd/SJ9koKaty8oDPF0O0jVQ1BOnP3Z/WZ+Ak4u2hqwoTOtPJSs2uMUCdVPK4oTmiel8JHlfpIoc6tRKWqMVpong+COYBsmD39wAge1VcXp21oKyWVAo30iV5IKdlEoXl+kZHape39hBYJKnVKFprnYychNX1JZYKKTkkOtTAKKI1No9+p+YWmB76HPfxDL6UvabjD/xpSj6xRMCuFbT579u9Qm+9SKu+idtuq+y20zCGFsH0Pr/lTUIG/TsF6UEEJyuPSFF+hQilVyU8GVqW40J/v04zFX3xJ+owrUhnXFKm05GyzoJXycShlABxRjEBdilMo1E8H1myKzFGsRR8ZYN4/sSq1uLuU5q35qIUpZa6jO5xNlbzVCV1gSkdepVUHCynu5/4O89jjAurKrLRCbT+rR3kwPlVYdqGghNrzd6Uw5l9IvPRDXvsa1mpvoQIotSJKk1qRnqkhya+0qpIfp/SkUqLRm3r3KwS89Ebi/ks2o1XKM2orJdQP7MabqlwnelYa7/9yQm/EDiMURnxqji5RUuWFTqsabqviW3+TmoWWf7WlfQboKfCZqtlhAG2hM9stQDOXeG9QduMAatHYvUdls40zvbaj8446M7M9qGpjl7uedFSRGsN8qh7Ix76sUupMhJ8a+dl+snFPFLXQUNeXThpiL9OF3ASyO2kqqZLWs1+dBZyAsugFvTEvK79S2uiga7QSaQAzjKD5p2Vh3RPucTnYYJdvnPGdVVzftOCd7AVNHy6UbM4K7URPcF2t4UInqRwpQOGFzu+o8LACRv0j+Ok+aBf6EWzv3N1JTJED29CPQAvBikC9nd8ooK8VwBb0M8imNIM/PdLAFjXysWw7mKN6dqUIs9A8B1WrzHs/gfm4Dzod+wrM/vMZ1B1Ea5ol3T/TJH+GBPzUYJ3kworV8x9J9X+RcPKkloBSS+oK68QlFROa2E5VEg61kPIdEuQzyO3EL2pV4b6H2YKOLlUFA98TH/7Yh4j3tJEXFbH0dMfESRXK+I+UcWOJV+FTOhH1v12ELcoTZVRKLpHeibmnIMfMtxMzmcj2vLNO+ONPVUmbqacNHqqo0v6RSDw2WKnZR2h49MNmzEOpQ0s/3Nx+KKEhJZ/zFwJHPpneyrcQ+J6eNLaZRh24/XskKE/YRB37i+kKYbPJO6VSz/C7T/0DHHE7Lrh0vzsAAAAASUVORK5CYII=",
      quote: "The innovation and quality delivered by Attica Infra is unmatched. They've helped us create landmark projects across multiple locations.",
      rating: 5
    },
    {
      name: "Meera Reddy",
      position: "Hospitality Manager",
      image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKkAAACUCAMAAADf7/luAAAAP1BMVEWoqa3///+lpqqio6f8/Pzl5eaoqavx8fG9vsDBwsTs7O3i4uPo6Omio6Xa2tumqq3R0tSys7a5ub3JycubnaGaB+a7AAAEFklEQVR4nO2c63KrMAyEQQbscAsOef9nPQaHJm0agu2VyOnwzXT6d2tbK8sSzbKDg4ODg4ODg4ODv0w1sbeIv8b/sKAVUae6GfdL0d56XkBEyo5D0+qJuuxHS4o+Ti2RNUOd/0T3J/tRYkmZ/lnml9iPOQZOpy5e6Jwo9PgR60rZqFdk3sSOmdpT5Nn9KFO+1TlRn3aV6ja+X9v3bzR7HgF1eb/xd/SJ9koKaty8oDPF0O0jVQ1BOnP3Z/WZ+Ak4u2hqwoTOtPJSs2uMUCdVPK4oTmiel8JHlfpIoc6tRKWqMVpong+COYBsmD39wAge1VcXp21oKyWVAo30iV5IKdlEoXl+kZHape39hBYJKnVKFprnYychNX1JZYKKTkkOtTAKKI1No9+p+YWmB76HPfxDL6UvabjD/xpSj6xRMCuFbT579u9Qm+9SKu+idtuq+y20zCGFsH0Pr/lTUIG/TsF6UEEJyuPSFF+hQilVyU8GVqW40J/v04zFX3xJ+owrUhnXFKm05GyzoJXycShlABxRjEBdilMo1E8H1myKzFGsRR8ZYN4/sSq1uLuU5q35qIUpZa6jO5xNlbzVCV1gSkdepVUHCynu5/4O89jjAurKrLRCbT+rR3kwPlVYdqGghNrzd6Uw5l9IvPRDXvsa1mpvoQIotSJKk1qRnqkhya+0qpIfp/SkUqLRm3r3KwS89Ebi/ks2o1XKM2orJdQP7MabqlwnelYa7/9yQm/EDiMURnxqji5RUuWFTqsabqviW3+TmoWWf7WlfQboKfCZqtlhAG2hM9stQDOXeG9QduMAatHYvUdls40zvbaj8446M7M9qGpjl7uedFSRGsN8qh7Ix76sUupMhJ8a+dl+snFPFLXQUNeXThpiL9OF3ASyO2kqqZLWs1+dBZyAsugFvTEvK79S2uiga7QSaQAzjKD5p2Vh3RPucTnYYJdvnPGdVVzftOCd7AVNHy6UbM4K7URPcF2t4UInqRwpQOGFzu+o8LACRv0j+Ok+aBf6EWzv3N1JTJED29CPQAvBikC9nd8ooK8VwBb0M8imNIM/PdLAFjXysWw7mKN6dqUIs9A8B1WrzHs/gfm4Dzod+wrM/vMZ1B1Ea5ol3T/TJH+GBPzUYJ3kworV8x9J9X+RcPKkloBSS+oK68QlFROa2E5VEg61kPIdEuQzyO3EL2pV4b6H2YKOLlUFA98TH/7Yh4j3tJEXFbH0dMfESRXK+I+UcWOJV+FTOhH1v12ELcoTZVRKLpHeibmnIMfMtxMzmcj2vLNO+ONPVUmbqacNHqqo0v6RSDw2WKnZR2h49MNmzEOpQ0s/3Nx+KKEhJZ/zFwJHPpneyrcQ+J6eNLaZRh24/XskKE/YRB37i+kKYbPJO6VSz/C7T/0DHHE7Lrh0vzsAAAAASUVORK5CYII=",
      quote: "Our hotel renovation project was handled with utmost precision by Attica Infra. Their team's expertise in hospitality construction is commendable.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Client Testimonials</h2>
          <p className="mt-4 text-xl text-gray-600">What Our Clients Say About Us</p>
        </div>

        <div className="relative">
          <div className="absolute -top-6 -left-6 w-24 h-24 text-blue-100 opacity-20 pointer-events-none">
            <Quote className="w-full h-full" />
          </div>

          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <div className="bg-white rounded-xl shadow-md p-8 h-full">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
