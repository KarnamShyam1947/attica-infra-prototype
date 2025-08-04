import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { X } from 'lucide-react';

interface LetsConnectProps {
  isOpen: boolean;
  title?:string;
  buttonText?:string;
  onClose: () => void;
  onSubmit: (values: any) => void;
  initialContext?: Record<string, any>;
}

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string().matches(/^[0-9]{10}$/, 'Phone number must be 10 digits').required('Phone number is required'),
  address: Yup.string().required('Address is required'),
});

const LetsConnect: React.FC<LetsConnectProps> = ({ isOpen, title, buttonText, onClose, onSubmit, initialContext = {} }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{title || "Let's Connect"}</h2>
          <button onClick={onClose}>
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        <Formik
          initialValues={{ name: '', email: '', phone: '', address: '', ...initialContext }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            onSubmit(values);
            onClose();
          }}
        >
          {({ errors, touched }) => (
            <Form className="space-y-4">
              {['name', 'email', 'phone', 'address'].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium mb-1 capitalize">{field}*</label>
                  <Field
                    name={field}
                    as={field === 'address' ? 'textarea' : 'input'}
                    rows={field === 'address' ? 3 : undefined}
                    className={`w-full border px-3 py-2 rounded-md ${(errors as any)[field] && (touched as any)[field] && 'border-red-500'}`}
                  />
                  {(errors as any)[field] && (touched as any)[field] && (
                    <div className="text-red-500 text-sm mt-1">{(errors as any)[field]}</div>
                  )}
                </div>
              ))}
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
                {buttonText || "Get Estimation"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LetsConnect;
