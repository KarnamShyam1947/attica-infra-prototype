import { Building2, Home, MapPin, MessageSquare, Phone, Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Property } from '../../../types/Proerty';

const PropertyDetails = () => {
  const [properties, setProperties] = useState<any>([]);
  const [loading, setLoading] = useState(true);


  const { type } = useParams();
  const [searchCity, setSearchCity] = useState('');
  const [searchArea, setSearchArea] = useState('');
  const [searchPincode, setSearchPincode] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const filteredProperties = properties.filter((property: any) => {
    const matchesType = property.type === type;
    const matchesCity = !searchCity || property.location.city.toLowerCase().includes(searchCity.toLowerCase());
    const matchesArea = !searchArea || property.location.area.toLowerCase().includes(searchArea.toLowerCase());
    const matchesPincode = !searchPincode || property.location.pincode.includes(searchPincode);
    return matchesType && matchesCity && matchesArea && matchesPincode;
  });

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProperties = filteredProperties.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);

  useEffect(() => {
    setCurrentPage(1); // Reset to first page on filter/type change
  }, [searchCity, searchArea, searchPincode, type]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch('http://localhost:3000/api/v1/properties/');
        const data = await res.json();
        console.log(data);
        
        setProperties(data.properties);
      } catch (error) {
        console.error('Error fetching properties:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getTypeIcon = () => {
    switch (type) {
      case 'house': return <Home className="w-16 h-16 text-blue-600" />;
      case 'plot': return <MapPin className="w-16 h-16 text-blue-600" />;
      case 'flat': return <Building2 className="w-16 h-16 text-blue-600" />;
      default: return <Home className="w-16 h-16 text-blue-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            {getTypeIcon()}
          </div>
          <h1 className="text-4xl font-bold text-gray-900 capitalize">{type} Properties</h1>
          <p className="mt-4 text-xl text-gray-600">Find your perfect {type}</p>
        </div>

        {/* Search Filters */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter city"
                  value={searchCity}
                  onChange={(e) => setSearchCity(e.target.value)}
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Area</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter area"
                value={searchArea}
                onChange={(e) => setSearchArea(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Pincode</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter pincode"
                value={searchPincode}
                onChange={(e) => setSearchPincode(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Property Listings */}
        <div className="space-y-6">
          {loading ? (
            <div className="space-y-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
                  <div className="grid grid-cols-1 md:grid-cols-3 h-full">
                    <div className="h-64 bg-gray-300 md:col-span-1"></div>
                    <div className="md:col-span-2 p-6 space-y-4">
                      <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                      <div className="h-4 bg-gray-200 rounded w-full"></div>
                      <div className="flex gap-2 mt-4">
                        <div className="h-8 bg-gray-200 rounded w-24"></div>
                        <div className="h-8 bg-gray-200 rounded w-24"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredProperties.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="text-2xl font-semibold text-gray-700">No properties found</h2>
              <p className="text-gray-500 mt-2">Try adjusting your filters or check back later.</p>
            </div>
          ) : currentProperties.map((property: Property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 h-full">

                <div className="md:col-span-1 relative h-full">
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation={{
                      prevEl: '.custom-swiper-prev',
                      nextEl: '.custom-swiper-next',
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    loop
                    className="h-full rounded-lg"
                  >
                    {property.imageUrls.map((imgUrl, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={imgUrl}
                          alt={`${property._id} image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </SwiperSlide>
                    ))}

                    {/* Navigation Buttons */}
                    <div className="custom-swiper-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-1 cursor-pointer hover:bg-gray-100">
                      <ChevronLeft className="w-5 h-5 text-gray-700" />
                    </div>
                    <div className="custom-swiper-next absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-1 cursor-pointer hover:bg-gray-100">
                      <ChevronRight className="w-5 h-5 text-gray-700" />
                    </div>
                  </Swiper>
                </div>


                <div className="md:col-span-2 p-6">
                  <div className="h-full flex flex-col">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">{property.title}</h3>
                      <p className="text-gray-600 mb-4">{property.description}</p>
                    </div>

                    <div className="flex justify-between items-center mb-4">
                      <span className="text-3xl font-bold text-blue-600">{property.price}</span>
                      <div className="text-right">
                        <p className="text-lg text-gray-600">{property.location.city}</p>
                        <p className="text-gray-500">{property.location.area}</p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <p className="text-gray-600">
                        <span className="font-medium">Location:</span> {property.location.city}, {property.location.area}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Pincode:</span> {property.location.pincode}
                      </p>
                    </div>

                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {property.features.map((feature, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      {/* <div className="flex gap-4">
                        <a href='' className="flex-1 bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                          <Phone className="h-5 w-5" />
                          Call Owner
                        </a>
                        <a href='' className="flex-1 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                          <MessageSquare className="h-5 w-5" />
                          Chat with Owner
                        </a>
                      </div> */}

                      <div className="flex flex-col md:flex-row gap-4">
                        <a
                          href={`tel:${property.phone}`}
                          target='_blank'
                          className="w-full md:flex-1 bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                        >
                          <Phone className="h-5 w-5" />
                          Call Owner
                        </a>
                        <a
                          target='_blank'
                          href={`https://api.whatsapp.com/send?phone=91${property.phone}`}
                          className="w-full md:flex-1 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
                        >
                          <MessageSquare className="h-5 w-5" />
                          Chat with Owner
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}


          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-10 space-x-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 border rounded disabled:opacity-50"
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-4 py-2 border rounded ${currentPage === i + 1 ? 'bg-blue-600 text-white' : ''}`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
