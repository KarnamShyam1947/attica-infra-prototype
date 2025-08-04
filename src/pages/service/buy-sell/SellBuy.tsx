import { BadgeCheck, BarChart, Building2, Handshake, Home, MapPin, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SellBuy = () => {
  const navigate = useNavigate();

  const propertyTypes = [
    {
      type: 'house',
      title: 'House',
      icon: <Home className="w-16 h-16 text-blue-600" />,
      description: 'Find your dream house or sell your property'
    },
    {
      type: 'plot',
      title: 'Plots/Sites',
      icon: <MapPin className="w-16 h-16 text-blue-600" />,
      description: 'Explore available plots or list your land'
    },
    {
      type: 'flat',
      title: 'Apartment Flats',
      icon: <Building2 className="w-16 h-16 text-blue-600" />,
      description: 'Discover apartments or sell your flat'
    }
  ];

  const bgColors = [
    "bg-green-100",
    "bg-red-100",
    "bg-yellow-100",
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-12">

          {/* LEFT COLUMN */}
          <div className='items-start'>
            <p className="text-lg text-justify text-gray-700">
              Attica Infra ensures safe investments with legal checks, market insights, and trusted developers—delivering quality properties, fair pricing, and transparent, end-to-end real estate solutions.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex items-center space-x-3">
                <BadgeCheck className="w-8 h-8 text-blue-600" />
                <div>
                  <h4 className="font-semibold text-lg">Title Verified</h4>
                  <p className="text-sm text-gray-600">Legally vetted properties</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <BarChart className="w-8 h-8 text-blue-600" />
                <div>
                  <h4 className="font-semibold text-lg">Market Research</h4>
                  <p className="text-sm text-gray-600">Insight-driven decisions</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Handshake className="w-8 h-8 text-blue-600" />
                <div>
                  <h4 className="font-semibold text-lg">Trusted Developers</h4>
                  <p className="text-sm text-gray-600">Projects from reputed builders</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <ShieldCheck className="w-8 h-8 text-blue-600" />
                <div>
                  <h4 className="font-semibold text-lg">Safe Investment</h4>
                  <p className="text-sm text-gray-600">End-to-end guidance & security</p>
                </div>
              </div>
            </div>
          </div>


          {/* RIGHT IMAGE */}
          <div className="relative h-[280px] w-full">
            <img
              src="./services/buy-sell.jpg"
              alt="Construction Site"
              className="rounded-lg object-cover w-full h-full shadow-2xl"
            />
          </div>
        </div>
      </div>


      <div className="min-h-screen pt-5 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900">Property Marketplace</h1>
            <p className="mt-4 text-xl text-gray-600">Buy or Sell Your Property</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {propertyTypes.map((property, index) => (
              <div
                key={property.type}
                onClick={() => navigate(`/property/${property.type}`)}
                className={`rounded-xl shadow-lg p-8 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${bgColors[index]}`}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Removed the bg-blue-50 and surrounding div */}
                  {property.icon}
                  <h2 className="text-2xl font-bold text-gray-900">{property.title}</h2>
                  <p className="text-gray-600">{property.description}</p>
                  <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Explore {property.title}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SellBuy;
