import { DashboardStats } from "../types/DashboradStatus";
import { Property } from "../types/Proerty";


export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Modern Villa with Garden',
    type: 'house',
    price: '1,25,00,000',
    location: {
      city: 'Mumbai',
      area: 'Bandra West',
      pincode: '400050'
    },
    features: ['3 Bedrooms', '2 Bathrooms', 'Garden', 'Swimming Pool', 'Parking'],
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Luxurious modern villa with spacious rooms, garden, and swimming pool in a prime location.',
    phone: '7899997784'
  },
  {
    id: '2',
    title: 'Commercial Plot Near Highway',
    type: 'plot',
    price: '75,00,000',
    location: {
      city: 'Delhi',
      area: 'Gurgaon',
      pincode: '122001'
    },
    features: ['Commercial Zone', 'Highway Access', 'Water Connection', 'Electricity'],
    image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Prime commercial plot with excellent connectivity and all basic amenities in place.',
    phone: '9876543211'
  },
  {
    id: '3',
    title: 'Luxury Apartment with Sea View',
    type: 'flat',
    price: '95,00,000',
    location: {
      city: 'Mumbai',
      area: 'Marine Drive',
      pincode: '400020'
    },
    features: ['3 Bedrooms', 'Fully Furnished', 'Sea View', 'Gym', 'Security'],
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Elegant apartment with breathtaking sea views and premium amenities in one of the most prestigious locations.',
    phone: '9876543212'
  },
  {
    id: '4',
    title: 'Residential Plot in Gated Community',
    type: 'plot',
    price: '45,00,000',
    location: {
      city: 'Bangalore',
      area: 'Whitefield',
      pincode: '560066'
    },
    features: ['Gated Community', 'Park Access', 'Ready to Construct', 'Corner Plot'],
    image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Ready-to-construct residential plot in a secure gated community with excellent amenities.',
    phone: '9876543213'
  },
  {
    id: '5',
    title: '2BHK Apartment Near IT Park',
    type: 'flat',
    price: '65,00,000',
    location: {
      city: 'Pune',
      area: 'Hinjawadi',
      pincode: '411057'
    },
    features: ['2 Bedrooms', 'Modular Kitchen', 'Covered Parking', 'Power Backup'],
    image: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Modern apartment located close to major IT parks with convenient access to shopping and entertainment.',
    phone: '9876543214'
  },
  {
    id: '6',
    title: 'Independent Bungalow with Large Garden',
    type: 'house',
    price: '1,85,00,000',
    location: {
      city: 'Ahmedabad',
      area: 'Bopal',
      pincode: '380058'
    },
    features: ['4 Bedrooms', '3 Bathrooms', 'Large Garden', 'Servant Quarter', 'Double Parking'],
    image: 'https://images.pexels.com/photos/32870/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Spacious bungalow with excellent architecture, large garden space and modern amenities in a peaceful locality.',
    phone: '9876543215'
  }
];

export const getDashboardStats = (properties: Property[]): DashboardStats => {
  return {
    total: properties.length,
    house: properties.filter(p => p.type === 'house').length,
    plot: properties.filter(p => p.type === 'plot').length,
    flat: properties.filter(p => p.type === 'flat').length
  };
};