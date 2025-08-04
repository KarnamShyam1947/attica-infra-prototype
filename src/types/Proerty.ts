export interface Property {
    _id: string;
    id: string;
    title: string;
    type: string;
    price: string;
    email: string;
    location: {
        city: string;
        area: string;
        pincode: string;
    };
    features: string[];
    imageUrls: string[];
    description: string;
    phone: string;
}

export type PropertyType = 'house' | 'plot' | 'flat';

export const PropertyTypeOptions: PropertyType[] = ['house', 'plot', 'flat'];

