import React, { useState } from 'react';
import { Card, CardBody, CardFooter } from '../../ui/Card';
import { Property } from '../../../types/Proerty';
import { Edit, Trash2, MapPin, Phone, ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../../ui/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import LoadingSpinner from '../../ui/LoadingSpinner';
import { deleteProperty } from '../../../services/PropertyService';
import { showConfirmation } from '../../../utils/Alerts';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const images = property.imageUrls.length ? property.imageUrls : [
    'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ];

  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading && <LoadingSpinner />}
      <Card className="h-full flex flex-col">
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              prevEl: `.prev-${property._id}`,
              nextEl: `.next-${property._id}`,
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop
            className="h-full"
          >
            {images.map((imgUrl, index) => (
              <SwiperSlide key={index} className="relative">
                {/* Overlay badge in top-right */}

                <div className="absolute top-0 right-0 m-2 bg-blue-800 text-white px-2 py-1 rounded text-xs uppercase font-bold">
                  {property.type}
                </div>
                
                <img
                  src={imgUrl}
                  alt={`${property.title} image ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>


          {/* Custom navigation buttons */}
          <div className={`prev-${property._id} custom-swiper-prev absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-1 cursor-pointer hover:bg-gray-100`}>
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </div>
          <div className={`next-${property._id} custom-swiper-next absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-1 cursor-pointer hover:bg-gray-100`}>
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </div>
          <div className="absolute top-0 right-0 m-2 bg-blue-800 text-white px-2 py-1 rounded text-xs uppercase font-bold">
            {property.type}
          </div>
        </div>
        <CardBody className="flex-grow">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{property.title}</h3>

          <div className="flex items-center text-gray-600 mb-2">
            <MapPin size={16} className="mr-1" />
            <span className="text-sm">{property.location.area}, {property.location.city}</span>
          </div>
          <p className="font-bold text-xl text-blue-800 mb-3">₹{property.price}</p>
          <div className="mb-3">
            <p className="text-sm text-gray-600 line-clamp-2">{property.description}</p>
          </div>
          <div className="flex flex-wrap gap-1 mb-3">
            {property.features.slice(0, 3).map((feature, index) => (
              <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                {feature}
              </span>
            ))}
            {property.features.length > 3 && (
              <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                +{property.features.length - 3}
              </span>
            )}
          </div>
          <div className="flex items-center text-gray-600">
            <Phone size={16} className="mr-1" />
            <span className="text-sm">{property.phone}</span>
          </div>
        </CardBody>
        <CardFooter className="flex justify-between items-center">
          <Button
            variant="outline"
            icon={Edit}
            size="sm"
            onClick={() => console.log(property.id)}
          >
            Edit
          </Button>
          <Button
            variant="danger"
            icon={Trash2}
            size="sm"
            onClick={async () => {
              const confirmed = await showConfirmation(
                'Are you sure?',
                'This action will permanently delete the property.',
                'warning',
                'Delete',
                'Cancel'
              );
              if (confirmed) {
                setLoading(true);
                await deleteProperty(property._id);
                setLoading(false);
              }
            }}
          >
            Delete
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default PropertyCard;
