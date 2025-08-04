import { CheckCircle } from 'lucide-react';
import React from 'react';

const AboutUs: React.FC = () => {
  const guarantees = [
    "Clear legal title checks",
    "Fair pricing with multiple quotations",
    "Skilled and verified contractors",
    "Custom architectural and interior designs",
    "100% money safety and timely delivery"
  ];

  return (
    <div className="bg-gray-50 text-gray-800 font-sans leading-relaxed">
      {/* Main About Section */}
      <section className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col lg:flex-row justify-between items-center gap-12">

          <div className="flex-1">
            <h2 className="text-3xl font-bold text-blue-700 mb-4 sm:text-4xl">About Attica Infra</h2>
            <p className="text-lg text-gray-600 mb-6 text-justify">
              <strong>Attica Infra Services</strong>, founded by <strong>Engineer Surendra Reddy Muthakana</strong>, is one of India’s leading construction and real estate solution providers.
              With over a decade of industry expertise, we are committed to building high-quality homes and delivering ethical, transparent, and customer-focused services.
            </p>
            <p className="text-lg text-gray-600 mb-6 text-justify">
              Our founder’s vision is simple yet powerful: to make top-class construction <strong>affordable, organized, and accessible</strong> to everyone.
              From <strong>plot verification</strong> and <strong>architectural design</strong> to <strong>construction</strong>, <strong>interiors</strong>, and <strong>material supply</strong>—we manage every aspect under one trusted roof.
            </p>

            {/* Guarantees as checkmarked list */}
            <span className='font-bold text-xl'>At Attica Infra We Guarantee: </span>
            <ul className="">
              {guarantees.map((item, index) => (
                <li key={index} className="flex items-start text-gray-800">
                  <CheckCircle className="min-w-[20px] min-h-[20px] w-5 h-5 text-green-600 mt-1 mr-2" />
                  <span>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

          </div>

          {/* Right: Image aligned to far right */}
          <div className="flex-shrink-0">
            <div style={{ width: "300px" }} className="flex flex-col items-center">
              <div className="overflow-hidden shadow-lg border-4 border-white rounded-lg w-full">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKkAAACUCAMAAADf7/luAAAAP1BMVEWoqa3///+lpqqio6f8/Pzl5eaoqavx8fG9vsDBwsTs7O3i4uPo6Omio6Xa2tumqq3R0tSys7a5ub3JycubnaGaB+a7AAAEFklEQVR4nO2c63KrMAyEQQbscAsOef9nPQaHJm0agu2VyOnwzXT6d2tbK8sSzbKDg4ODg4ODg4ODv0w1sbeIv8b/sKAVUae6GfdL0d56XkBEyo5D0+qJuuxHS4o+Ti2RNUOd/0T3J/tRYkmZ/lnml9iPOQZOpy5e6Jwo9PgR60rZqFdk3sSOmdpT5Nn9KFO+1TlRn3aV6ja+X9v3bzR7HgF1eb/xd/SJ9koKaty8oDPF0O0jVQ1BOnP3Z/WZ+Ak4u2hqwoTOtPJSs2uMUCdVPK4oTmiel8JHlfpIoc6tRKWqMVpong+COYBsmD39wAge1VcXp21oKyWVAo30iV5IKdlEoXl+kZHape39hBYJKnVKFprnYychNX1JZYKKTkkOtTAKKI1No9+p+YWmB76HPfxDL6UvabjD/xpSj6xRMCuFbT579u9Qm+9SKu+idtuq+y20zCGFsH0Pr/lTUIG/TsF6UEEJyuPSFF+hQilVyU8GVqW40J/v04zFX3xJ+owrUhnXFKm05GyzoJXycShlABxRjEBdilMo1E8H1myKzFGsRR8ZYN4/sSq1uLuU5q35qIUpZa6jO5xNlbzVCV1gSkdepVUHCynu5/4O89jjAurKrLRCbT+rR3kwPlVYdqGghNrzd6Uw5l9IvPRDXvsa1mpvoQIotSJKk1qRnqkhya+0qpIfp/SkUqLRm3r3KwS89Ebi/ks2o1XKM2orJdQP7MabqlwnelYa7/9yQm/EDiMURnxqji5RUuWFTqsabqviW3+TmoWWf7WlfQboKfCZqtlhAG2hM9stQDOXeG9QduMAatHYvUdls40zvbaj8446M7M9qGpjl7uedFSRGsN8qh7Ix76sUupMhJ8a+dl+snFPFLXQUNeXThpiL9OF3ASyO2kqqZLWs1+dBZyAsugFvTEvK79S2uiga7QSaQAzjKD5p2Vh3RPucTnYYJdvnPGdVVzftOCd7AVNHy6UbM4K7URPcF2t4UInqRwpQOGFzu+o8LACRv0j+Ok+aBf6EWzv3N1JTJED29CPQAvBikC9nd8ooK8VwBb0M8imNIM/PdLAFjXysWw7mKN6dqUIs9A8B1WrzHs/gfm4Dzod+wrM/vMZ1B1Ea5ol3T/TJH+GBPzUYJ3kworV8x9J9X+RcPKkloBSS+oK68QlFROa2E5VEg61kPIdEuQzyO3EL2pV4b6H2YKOLlUFA98TH/7Yh4j3tJEXFbH0dMfESRXK+I+UcWOJV+FTOhH1v12ELcoTZVRKLpHeibmnIMfMtxMzmcj2vLNO+ONPVUmbqacNHqqo0v6RSDw2WKnZR2h49MNmzEOpQ0s/3Nx+KKEhJZ/zFwJHPpneyrcQ+J6eNLaZRh24/XskKE/YRB37i+kKYbPJO6VSz/C7T/0DHHE7Lrh0vzsAAAAASUVORK5CYII="
                  alt="Engineer Sekhar Reddy Muthakana"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-4 text-lg font-medium text-blue-700 text-center">Founder & CEO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-blue-100">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <blockquote className="text-2xl italic text-center text-gray-700">
            “At Attica Infra Services, we don't just build homes—<span className="font-semibold text-blue-600">we build trust, value, and lasting relationships.</span>”
          </blockquote>
        </div>
      </section>

      {/* Get in Touch Section */}
      {/* <section className="bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold mb-4">Get in Touch for Your Construction Needs</h2>
            <p className="text-lg mb-6">
              Whether you're starting a new project or seeking professional consultation, we’re here to help turn your vision into reality.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition"
            >
              Contact Us
            </a>
          </div>

          <div
            style={{ height: "400px", width: "400px" }}
            className="rounded-full overflow-hidden shadow-lg border-4 border-white"
          >
            <img
              src="/assets/CEO.jpeg"
              alt="Engineer Sekhar Reddy Muthakana"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default AboutUs;
