import { MapPin, Phone, Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Builder } from '../types/Builder';

const BuilderList = () => {

  const [builders, setBuilders] = useState<Builder[]>([]);
  const [loading, setLoading] = useState(true);


  const navigate = useNavigate();
  const [selectedBuilders, setSelectedBuilders] = useState<Builder[]>([]);
  const [searchCity, setSearchCity] = useState('');
  const [searchArea, setSearchArea] = useState('');
  const [searchPincode, setSearchPincode] = useState('');

  useEffect(() => {
    const fetchBuilders = async () => {
      setLoading(true);
      try {
        const res = await fetch('http://localhost:3000/api/v1/builders');
        const data = await res.json();
        setBuilders(data.builders);
      } catch (error) {
        console.error('Error fetching builders:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBuilders();
  }, []);


  const handleBuilderSelect = (builder: Builder) => {
    setSelectedBuilders(prev => {
      const alreadySelected = prev.find(b => b._id === builder._id);
      if (alreadySelected) {
        return prev.filter(b => b._id !== builder._id);
      } else {
        return [...prev, builder];
      }
    });
  };

  const handleContinue = () => {
    navigate('/multiple-quote', { state: { selectedBuilders } });
  };

  const handleGetQuote = (builder: Builder) => {
    setSelectedBuilders([builder]);
    navigate('/multiple-quote', { state: { selectedBuilders: [builder] } });
  };


  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };


  const filteredBuilders = builders.filter(builder => {
    const cityMatch = builder.city.toLowerCase().includes(searchCity.toLowerCase());
    const areaMatch = !searchArea || builder.area.toLowerCase().includes(searchArea.toLowerCase());
    const pincodeMatch = !searchPincode || builder.pincode.includes(searchPincode);
    return cityMatch && areaMatch && pincodeMatch;
  });

  return (
    <>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Select Builders</h2>
          {/* Search Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white p-6 rounded-lg shadow-md">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City*
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter city"
                  value={searchCity}
                  onChange={(e) => setSearchCity(e.target.value)}
                  required
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Area
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter area"
                value={searchArea}
                onChange={(e) => setSearchArea(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Pincode*
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter pincode"
                value={searchPincode}
                onChange={(e) => setSearchPincode(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
        {/* Builders List */}
        <div className="space-y-6">
          {loading ? (
            <div className="space-y-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow animate-pulse flex flex-col sm:flex-row gap-4">
                  <div className="w-full sm:w-48 h-48 bg-gray-300 rounded-lg"></div>
                  <div className="flex-1 space-y-3">
                    <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                    <div className="flex gap-4 mt-4">
                      <div className="h-10 bg-gray-200 rounded w-24"></div>
                      <div className="h-10 bg-gray-200 rounded w-24"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredBuilders.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="text-2xl font-semibold text-gray-700">No builders found</h2>
              <p className="text-gray-500 mt-2">Try adjusting your search filters.</p>
            </div>
          ) :
            filteredBuilders.map(builder => (
              <div
                key={builder._id}
                className={`bg-white rounded-lg shadow-md p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-6 cursor-pointer transition-all duration-200 ${selectedBuilders.includes(builder) ? 'ring-2 ring-blue-500' : ''
                  }`}
              >

                <div className="w-full sm:w-48 h-48 flex-shrink-0">
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation={{
                      prevEl: '.custom-swiper-prev',
                      nextEl: '.custom-swiper-next',
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    loop
                    className="relative h-full rounded-lg"
                  >
                    {builder.imageUrls.map((imgUrl, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={imgUrl}
                          alt={`${builder.name} image ${index + 1}`}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </SwiperSlide>
                    ))}

                    {/* Custom arrows */}
                    <div className="custom-swiper-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-1 cursor-pointer hover:bg-gray-100">
                      <ChevronLeft className="w-5 h-5 text-gray-700" />
                    </div>

                    <div className="custom-swiper-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-1 cursor-pointer hover:bg-gray-100">
                      <ChevronRight className="w-5 h-5 text-gray-700" />
                    </div>
                  </Swiper>
                </div>


                {/* Builder Details */}
                <div
                  onClick={() => handleBuilderSelect(builder)}
                  className="flex-grow flex flex-col justify-between">
                  <div className="flex flex-col sm:flex-row justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{builder.name}</h3>
                      <p className="text-gray-600 mt-1">{builder.description}</p>
                      <p className="text-blue-600 font-medium mt-2">Experience: {builder.experience}</p>
                    </div>
                    <div className="flex items-center text-gray-600 mt-2 sm:mt-0">
                      <MapPin className="w-5 h-5 mr-1" />
                      <span>{builder.city}, {builder.area}</span>
                    </div>
                  </div>
                  {/* Contact Info */}
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
                    <p>
                      <span className="font-medium">Contact: </span>
                      {builder.phone}
                    </p>
                    <p>
                      <span className="font-medium">Pincode: </span>
                      {builder.pincode}
                    </p>
                  </div>
                  {/* Actions */}
                  <div className="flex flex-wrap justify-end items-center gap-3 mt-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCall(builder.phone);
                      }}
                      className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300"
                    >
                      <Phone className="w-4 h-4" />
                      Call Builder
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleGetQuote(builder);
                      }}
                      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                    >
                      Get Quote
                    </button>
                  </div>
                </div>

                {/* Checkmark Indicator */}
                <div onClick={() => { handleBuilderSelect(builder) }} className="flex items-start sm:items-center mt-4 sm:mt-0">
                  <div className={`w-6 h-6 border-2 rounded ${selectedBuilders.some(b => b._id === builder._id)
                    ? 'border-blue-500 bg-blue-500'
                    : 'border-gray-300'
                    }`}>
                    {selectedBuilders.some(b => b._id === builder._id) && (
                      <svg className="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
        {selectedBuilders.length > 0 && (
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleContinue}
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Continue with Selected Builders ({selectedBuilders.length})
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default BuilderList;