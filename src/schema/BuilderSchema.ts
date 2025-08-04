
import * as Yup from 'yup';

export const BuilderSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    image: Yup.string().url('Must be a valid URL'),
    description: Yup.string().required('Description is required'),
    experience: Yup.string().required('Experience is required'),
    phone: Yup.string()
        .matches(/^\d{10}$/, 'Phone number must be 10 digits')
        .required('Phone number is required'),
    city: Yup.string().required('City is required'),
    area: Yup.string().required('Area is required'),
    pincode: Yup.string()
        .matches(/^\d{6}$/, 'Pincode must be 6 digits')
        .required('Pincode is required'),
});