import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ChevronRight, ChevronLeft, Check, FileText } from 'lucide-react';

interface FormValues {
  projectName: string;
  projectLocation: string;
  buildUpArea: string;
  phoneNumber: string;
  projectDescription: string;
  superStructure: string;
  flooringAndTiling: string;
  painting: string;
  electrical: string;
  plumbing: string;
  windows: string;
  metalFabrication: string;
  extras: string;
  termsAccepted: boolean;
}

const validationSchema = Yup.object({
  projectName: Yup.string().required('Project name is required'),
  projectLocation: Yup.string().required('Project location is required'),
  buildUpArea: Yup.string().required('Build up area is required'),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),
  projectDescription: Yup.string().required('Project description is required'),
  superStructure: Yup.string().required('Super structure details are required'),
  flooringAndTiling: Yup.string().required('Flooring & tiling details are required'),
  painting: Yup.string().required('Painting details are required'),
  electrical: Yup.string().required('Electrical details are required'),
  plumbing: Yup.string().required('Plumbing details are required'),
  windows: Yup.string().required('Windows details are required'),
  metalFabrication: Yup.string().required('Metal fabrication details are required'),
  extras: Yup.string().required('Extras details are required'),
  termsAccepted: Yup.boolean()
    .oneOf([true], 'You must accept the terms and conditions')
    .required('You must accept the terms and conditions'),
});

const formSteps = [
  {
    title: 'Basic Information',
    description: 'Project details and contact information',
    icon: <FileText className="w-5 h-5" />,
    fields: ['projectName', 'projectLocation', 'buildUpArea', 'phoneNumber', 'projectDescription']
  },
  {
    title: 'Structure & Flooring',
    description: 'Building structure and flooring specifications',
    icon: <FileText className="w-5 h-5" />,
    fields: ['superStructure', 'flooringAndTiling', 'painting']
  },
  {
    title: 'Utilities',
    description: 'Electrical, plumbing, and window details',
    icon: <FileText className="w-5 h-5" />,
    fields: ['electrical', 'plumbing', 'windows']
  },
  {
    title: 'Additional Details',
    description: 'Metal work and extra requirements',
    icon: <FileText className="w-5 h-5" />,
    fields: ['metalFabrication', 'extras']
  },
  {
    title: 'Terms & Conditions',
    description: 'Review and accept terms',
    icon: <FileText className="w-5 h-5" />,
    fields: ['termsAccepted']
  }
];

const ConstructionForm = () => {
  const location = useLocation();
  const selectedBuilders = location.state?.selectedBuilders || [];
  const [currentStep, setCurrentStep] = useState(0);
  console.log(selectedBuilders);

  const initialValues: FormValues = {
    projectName: '',
    projectLocation: '',
    buildUpArea: '',
    phoneNumber: '',
    projectDescription: '',
    superStructure: '',
    flooringAndTiling: '',
    painting: '',
    electrical: '',
    plumbing: '',
    windows: '',
    metalFabrication: '',
    extras: '',
    termsAccepted: false,
  };

  const handleSubmit = (values: FormValues) => {
    console.log('Form submitted:', values);
    // Handle form submission here
  };

  const validateCurrentStep = async (values: FormValues, validateForm: any) => {
    const errors = await validateForm(values);
    const currentFields = formSteps[currentStep].fields;
    
    // Check if any of the current step's fields have errors
    const hasStepErrors = currentFields.some(field => errors[field]);
    
    return !hasStepErrors;
  };

  const renderTermsAndConditions = () => (
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
      <h3 className="text-lg font-semibold mb-4">CONTRACT AGREEMENT FOR CONSTRUCTION OF RESIDENTIAL BUILDING</h3>
      <div className="space-y-4 text-sm text-gray-600">
        <p>The total area of construction is approximately 6,550 sq.ft. (65.5 squares) consisting G+4 Floors.</p>
        <p>The Rate of construction is Rs.1,95,000/square (100 Square feet), and the total value of the construction of Residential House is Rs. 1,26,75,000/-</p>
        
        <div className="space-y-2">
          <h4 className="font-semibold">GENERAL CONDITIONS OF AGREEMENT</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Construction of building is as per specifications given and Architectural drawing & design</li>
            <li>Water and Electricity to be given by the OWNER</li>
            <li>All Departmental depositions are to be paid by the OWNER</li>
            <li>Any EXTRA works will be carried out after mutual discussion and Rate approval</li>
            <li>Elevation More than Expected will Be Charged Based on Mutual Discussion with Owner</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold">MATERIAL BRAND USED BY CONTRACTOR</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Main door and Pooja Door Teak wood with polishing for Duplex house</li>
            <li>Other Doors - Neem Frame With Plywood Doors Cost Around Rs. 16,000/PC</li>
            <li>Wooden windows with shutters Honne or sal wood with necessary safety MS rods with Enamel painting Or UPVC Slide Window with Safety Grills</li>
            <li>Electrical- external fittings Like Joomer, Glisser, Chimey Etc Was not Inclusive</li>
            <li>Plumbing - external fittings like commode, Mixers, Wash Basin, and Sink Etc. Standard make like Jaquar, Somany, Hindware, or Equivalent make at your choice</li>
            <li>Completion period 15 Months from the date of handing over the site</li>
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Construction Request Form</h1>
          <p className="mt-4 text-xl text-gray-600">Please provide your construction requirements</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="flex items-center">
                {formSteps.map((step, index) => (
                  <React.Fragment key={index}>
                    <div className="relative flex flex-col items-center">
                      <div 
                        className={`
                          w-12 h-12 rounded-full border-2 flex items-center justify-center
                          ${index <= currentStep 
                            ? 'border-blue-600 bg-blue-600 text-white' 
                            : 'border-gray-300 bg-white text-gray-500'}
                          transition-all duration-300
                        `}
                      >
                        {index < currentStep ? (
                          <Check className="w-6 h-6" />
                        ) : (
                          step.icon
                        )}
                      </div>
                      <div className="absolute -bottom-8 w-32 text-center">
                        <p className={`text-sm font-medium ${
                          index <= currentStep ? 'text-blue-600' : 'text-gray-500'
                        }`}>
                          {step.title}
                        </p>
                        {/* <p className="text-xs text-gray-400 mt-1">{step.description}</p> */}
                      </div>
                    </div>
                    {index < formSteps.length - 1 && (
                      <div 
                        className={`
                          w-24 h-1 mx-2
                          ${index < currentStep ? 'bg-blue-600' : 'bg-gray-200'}
                          transition-all duration-300
                        `}
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isValid, dirty, validateForm, values }) => (
              <Form className="space-y-6">
                {currentStep === formSteps.length - 1 ? (
                  <>
                    {renderTermsAndConditions()}
                    <div className="space-y-4">
                      <label className="flex items-center space-x-2">
                        <Field
                          type="checkbox"
                          name="termsAccepted"
                          className="w-4 h-4 text-blue-600 rounded"
                        />
                        <span className="text-sm text-gray-700">
                          I have read and agree to the terms and conditions
                        </span>
                      </label>
                      {errors.termsAccepted && touched.termsAccepted && (
                        <div className="text-red-500 text-sm">{errors.termsAccepted}</div>
                      )}
                    </div>
                  </>
                ) : (
                  formSteps[currentStep].fields.map((fieldName) => (
                    <div key={fieldName} className="space-y-1">
                      <label className="block text-sm font-medium text-gray-700 capitalize">
                        {fieldName.replace(/([A-Z])/g, ' $1').trim()}*
                      </label>
                      <Field
                        name={fieldName}
                        as={fieldName === 'projectDescription' || 
                            fieldName === 'superStructure' || 
                            fieldName === 'flooringAndTiling' || 
                            fieldName === 'painting' || 
                            fieldName === 'electrical' || 
                            fieldName === 'plumbing' || 
                            fieldName === 'windows' || 
                            fieldName === 'metalFabrication' || 
                            fieldName === 'extras' ? 'textarea' : 'input'}
                        rows={4}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500
                          ${errors[fieldName] && touched[fieldName] ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {errors[fieldName] && touched[fieldName] && (
                        <div className="text-red-500 text-sm">{errors[fieldName]}</div>
                      )}
                    </div>
                  ))
                )}

                <div className="flex justify-between pt-6">
                  {currentStep > 0 && (
                    <button
                      type="button"
                      onClick={() => setCurrentStep(currentStep - 1)}
                      className="flex items-center px-6 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition duration-200"
                    >
                      <ChevronLeft className="w-5 h-5 mr-2" />
                      Previous
                    </button>
                  )}
                  
                  {currentStep < formSteps.length - 1 ? (
                    <button
                      type="button"
                      onClick={async () => {
                        const isStepValid = await validateCurrentStep(values, validateForm);
                        if (isStepValid) {
                          setCurrentStep(currentStep + 1);
                        } else {
                          // Touch all fields in current step to show errors
                          formSteps[currentStep].fields.forEach(field => {
                            touched[field] = true;
                          });
                        }
                      }}
                      className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 ml-auto"
                    >
                      Next
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={!isValid || !dirty}
                      className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 ml-auto disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Submit Request
                      <Check className="w-5 h-5 ml-2" />
                    </button>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default ConstructionForm;