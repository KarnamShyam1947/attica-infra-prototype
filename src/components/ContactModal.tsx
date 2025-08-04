import React from 'react';
import { X } from 'lucide-react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (values: ContactFormValues & { additionalInfo: any }) => void;
  title?: string;
  submitButtonText?: string;
  additionalInfo?: any;
}

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),
  message: Yup.string().required('Message is required'),
});

const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title = 'Contact Us',
  submitButtonText = "Submit",
  additionalInfo = {}
}) => {
  if (!isOpen) return null;

  const handleSubmit = (values: ContactFormValues) => {
    onSubmit({
      ...values,
      additionalInfo
    });
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-md h-auto mx-4">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <Formik
          initialValues={{
            name: '',
            email: '',
            phone: '',
            message: ''
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name*
                </label>
                <Field
                  name="name"
                  type="text"
                  className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 ${errors.name && "border-red-600"}`}
                  placeholder="Enter your name"
                />
                {errors.name && touched.name && (
                  <div className="text-red-500 text-sm mt-1">{errors.name}</div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email*
                </label>
                <Field
                  name="email"
                  type="email"
                  className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 ${errors.email && "border-red-600"}`}
                  placeholder="Enter your email"
                />
                {errors.email && touched.email && (
                  <div className="text-red-500 text-sm mt-1">{errors.email}</div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number*
                </label>
                <Field
                  name="phone"
                  type="tel"
                  className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 ${errors.phone && "border-red-600"}`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && touched.phone && (
                  <div className="text-red-500 text-sm mt-1">{errors.phone}</div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message*
                </label>
                <Field
                  name="message"
                  as="textarea"
                  rows={4}
                  className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 ${errors.message && "border-red-600"}`}
                  placeholder="Enter your message"
                />
                {errors.message && touched.message && (
                  <div className="text-red-500 text-sm mt-1">{errors.message}</div>
                )}
              </div>

              {/* {Object.keys(additionalInfo).length > 0 && (
                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="font-medium text-gray-900 mb-2">Additional Information</h3>
                  {Object.entries(additionalInfo).map(([key, value]) => (
                    <div key={key} className="text-sm text-gray-600">
                      <span className="font-medium">{key}: </span>
                      {String(value)}
                    </div>
                  ))}
                </div>
              )} */}

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                {submitButtonText}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactModal;