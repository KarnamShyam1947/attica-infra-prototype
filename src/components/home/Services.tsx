import { Building2, CheckCircle, Factory, Home, Warehouse } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Home className="w-12 h-12 text-blue-600" />,
      title: "Buy/Sell",
      description: (
        <div className="space-y-2 text-gray-800 ">
          <p>Attica Infra Services works with trusted developers to offer the best plots, flats, and homes for sale. We ensure every property is carefully verified with the following services:</p>
          <ul className="list-none space-y-2">
            <li className="flex items-start">
              <CheckCircle className="min-w-[17px] min-h-[17px] w-5 h-5 text-green-600 mt-1 mr-2" />
              <span><strong>Legal Title Check:</strong> We ensure the property’s ownership is clear and safe for your investment.</span>
            </li>
            
            <li className="flex items-start">
              <CheckCircle className="min-w-[17px] min-h-[17px] w-5 h-5 text-green-600 mt-1 mr-2" />
              <span><strong>Market Research:</strong> Our team compares the prices of similar plots, flats, and homes to make sure you get the best deal.</span>
            </li>

            <li className="flex items-start">
              <CheckCircle className="min-w-[17px] min-h-[17px] w-5 h-5 text-green-600 mt-1 mr-2" />
              <span><strong>Trusted Developers:</strong> We only work with reliable developers who focus on quality and honesty.</span>
            </li>
          </ul>
        </div>
      ),
      image: "./home/buy-sell.jpg",
      buttonText: "View Properties",
      url: "/sell-buy"
    },
    {
      icon: <Building2 className="w-12 h-12 text-blue-600" />,
      title: "Architecture Design",
      description: (
        <div className="space-y-4 text-gray-800">
          <p>
            Attica Infra Services specializes in the best architecture and innovative designs, providing:
          </p>
          <ul className="space-y-2">
            {[
              "Site Plans",
              "Architectural Floor Plans",
              "3D Half Layouts",
              "Structural Drawings",
              "Elevation 3D Designs",
              "Approval Drawings",
              "3D Interior Designs"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle size={18} className="text-green-500 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>We also offer customized solutions based on customer requirements.</p>
        </div>
      ),
      image: "./home/architecture-design.jpg",
      buttonText: "Explore Services",
      url: "/architecture-design"
    },
    {
      icon: <Factory className="w-12 h-12 text-blue-600" />,
      title: "Construction Experts",
      description: (
        <div className="space-y-4 text-gray-800">
          <p>
            Attica Infra Services partners with trusted, expert contractors to build your dream home with care and precision.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <CheckCircle className="min-w-[17px] min-h-[17px] w-5 h-5 text-green-600 mt-1 mr-2" />
              <span>Whether it's an independent house, duplex/triplex, or modular home, we offer the best construction at the best prices.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="min-w-[17px] min-h-[17px] w-5 h-5 text-green-600 mt-1 mr-2" />
              <span>You don’t need to waste time or money—Attica Infra Services gives you the best estimates from reliable professionals, ensuring you get top value, quality, and convenience all in one place!</span>
            </li>
          </ul>
        </div>
      ),
      image: "./home/construction.jpg",
      buttonText: "Meet Our experts",
      url: "/quote"
    },
    {
      icon: <Warehouse className="w-12 h-12 text-blue-600" />,
      title: "Home Interior Experts",
      description: (
        <div className="space-y-4 text-gray-800">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle size={38} className="text-green-500" />
              <span>Providing end-to-end home interior solutions – from modular kitchens and wardrobes to false ceilings, TV units, study tables, and more.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={38} className="text-green-500" />
              <span>We focus on the latest trends, top-quality designs with warranties, and affordable prices, offering the best value for your home!</span>
            </li>
          </ul>
        </div>
      ),
      image: "./home/interior.jpg",
      buttonText: "Explore Interior Design",
      url: "/interior-design"
    },
  ];

  const bgColors = [
    "bg-orange-100",
    "bg-blue-100",
    "bg-green-100",
    "bg-yellow-100",
  ]

  return (

    <section id="services" className="py-20 bg-gray-50">
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
      <div className="">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">Comprehensive Construction Solutions for Every Need</p>
        </div>


        {services.map((service, index) => (
          <div className={`${bgColors[index]} py-5`}>
            <div
              key={index}
              className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
            >
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                  {service.icon}
                  <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <div className="text-gray-600 text-lg leading-relaxed">
                  {service.description}
                </div>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center gap-2">
                  <Link to={service.url}>{service.buttonText}</Link>
                </button>
              </div>
              <div className="w-full lg:w-1/2">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Services;