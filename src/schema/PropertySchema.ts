
import * as Yup from 'yup';

export const propertySchema = Yup.object({
    title: Yup.string().required('Title is required'),
    type: Yup.string().required('Property type is required'),
    price: Yup.string().required('Price is required'),
    phone: Yup.string()
        .required('Phone number is required')
        .matches(/^\d{10}$/, 'Phone number must be 10 digits'),
    location: Yup.object({
        city: Yup.string().required('City is required'),
        area: Yup.string().required('Area is required'),
        pincode: Yup.string().required('Pincode is required'),
    }),
    features: Yup.array().min(1, 'At least one feature is required'),
    description: Yup.string().required('Description is required'),
    image: Yup.string().url('Invalid image URL').nullable(),
});