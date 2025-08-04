import React, { useState } from 'react';
import { Card, CardBody, CardFooter } from '../../ui/Card';
import { Builder } from '../../../types/Builder';
import { Edit, Trash2, MapPin, Phone, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../../ui/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { showConfirmation } from '../../../utils/Alerts';
import LoadingSpinner from '../../ui/LoadingSpinner';
import { deleteBuilder } from '../../../services/BuildersService';

interface BuilderCardProps {
  builder: Builder;
}

const BuilderCard: React.FC<BuilderCardProps> = ({ builder }) => {
  const images = builder.imageUrls.length ? builder.imageUrls : [
    'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ];

  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading && <LoadingSpinner text="Deleting the requested resource....." />}

      <Card className="h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              prevEl: `.prev-${builder._id}`,
              nextEl: `.next-${builder._id}`,
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop
            className="h-full"
          >
            {images.map((imgUrl, index) => (
              <SwiperSlide key={index}>
                <img
                  src={imgUrl}
                  alt={`${builder.name} image ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={`prev-${builder._id} custom-swiper-prev absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-1 cursor-pointer hover:bg-gray-100`}>
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </div>
          <div className={`next-${builder._id} custom-swiper-next absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-1 cursor-pointer hover:bg-gray-100`}>
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </div>
        </div>
        <CardBody className="flex-grow">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{builder.name}</h3>
          <div className="flex items-center text-gray-600 mb-2">
            <MapPin size={16} className="mr-1" />
            <span className="text-sm">{builder.area}, {builder.city}</span>
          </div>
          <div className="flex items-center text-amber-600 mb-3">
            <Award size={16} className="mr-1" />
            <span className="text-sm">{builder.experience} years experience</span>
          </div>
          <div className="mb-3">
            <p className="text-sm text-gray-600 line-clamp-2">{builder.description}</p>
          </div>
          <div className="flex items-center text-gray-600">
            <Phone size={16} className="mr-1" />
            <span className="text-sm">{builder.phone}</span>
          </div>
        </CardBody>
        <CardFooter className="flex justify-between items-center">
          <Button
            variant="outline"
            icon={Edit}
            size="sm"
            onClick={() => console.log(builder.id)}
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
                await deleteBuilder(builder._id);
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

export default BuilderCard;