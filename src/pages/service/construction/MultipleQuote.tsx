import { Disclosure } from '@headlessui/react';
import { Field, Form, Formik } from 'formik';
import { ArrowRightCircle, BadgeDollarSign, Building2, ChevronDown, Loader2, Paintbrush, ShieldCheck, Users, X } from 'lucide-react';
import { useState } from 'react';
import * as Yup from 'yup';
import LoadingSpinner from '../../../components/ui/LoadingSpinner';
import { useLocation } from 'react-router-dom';
import ImageSlider from '../../../components/ui/ImageSlider';
import FeatureGrid from '../../../components/ui/FeatureGrid';
import { showAlert } from '../../../utils/Alerts';

const features = [
  {
    icon: <Paintbrush className="w-12 h-12 text-blue-600" />,
    title: "Creative & Functional Designs",
    description: "We combine innovation with practicality to create spaces that are both visually stunning and highly usable."
  },
  {
    icon: <Building2 className="w-12 h-12 text-blue-600" />,
    title: "Strong Civil & Architectural Planning",
    description: "Our thorough planning process ensures structurally sound and aesthetically impressive results."
  },
  {
    icon: <Users className="w-12 h-12 text-blue-600" />,
    title: "Expert In-House Team (No Subcontracting)",
    description: "Our in-house team manages your entire project to maintain quality, consistency, and accountability."
  },
  {
    icon: <BadgeDollarSign className="w-12 h-12 text-blue-600" />,
    title: "Clear, Transparent Pricing",
    description: "No hidden fees or surprise costs—just honest pricing that reflects the true value of our work."
  },
  {
    icon: <ShieldCheck className="w-12 h-12 text-blue-600" />,
    title: "Complete Project Ownership",
    description: "From concept to completion, we take full responsibility to ensure a seamless experience."
  },
];

const bgColors = [
  "bg-orange-100",
  "bg-blue-100",
  "bg-green-100",
  "bg-yellow-100",
  "bg-purple-100",
];

const endToEnd = [
  { id: '1', imageUrl: './quote/1.jpg' },
  { id: '2', imageUrl: './quote/2.jpg' },
  { id: '3', imageUrl: './quote/3.jpg' },
  { id: '4', imageUrl: './quote/4.jpg' },
  { id: '5', imageUrl: './quote/5.jpg' },
];

const sections = [
  {
    title: 'Design & Drawing',
    fields: [
      {
        "label": "Architectural Layout | 2D",
        "name": "architectural_layout_2d",
        "defaultValue": "Architectural Layout",
        type: 'radio'
      },
      {
        "label": "Basic Elevation",
        "name": "basic_elevation",
        "defaultValue": "Basic Elevation",
        type: 'radio'
      },
      {
        "label": "Structural Design",
        "name": "structural_design",
        "defaultValue": "Structural Design",
        type: 'radio'
      },
      {
        "label": "3D Elevation",
        "name": "3d_elevation",
        "defaultValue": "3D Elevation",
        type: 'radio'
      },
      {
        "label": "Electrical Drawings",
        "name": "electrical_drawings",
        "defaultValue": "Electrical Drawings",
        type: 'radio'
      },
      {
        "label": "Plumbing Drawings",
        "name": "plumbing_drawings",
        "defaultValue": "Plumbing Drawings",
        type: 'radio'
      },
      {
        "label": "Furniture Plan",
        "name": "furniture_plan",
        "defaultValue": "Furniture Plan",
        type: 'radio'
      },
      {
        "label": "Soil Test",
        "name": "soil_test",
        "defaultValue": "Soil Test",
        type: 'radio'
      },
    ]
  },
  {
    title: 'Structure Standard',
    fields: [
      {
        "label": "Plot Size",
        "name": "build_up_area",
        "defaultValue": "100 (sq. ft)",
        "type": "textarea"
      },
      {
        "label": "Basement Height",
        "name": "basement_height",
        "defaultValue": "Upto 5 feet",
        "type": "textarea"
      },
      {
        "label": "Ceiling Height",
        "name": "ceiling_height",
        "defaultValue": "10 feet (Finished Floor level to Finished Floor level)",
        "type": "textarea"
      },
      {
        "label": "Steel Reinforcement: As per Design Standard",
        "name": "steel",
        "defaultValue": "Vizag or equivalent",
        "type": "textarea"
      },
      {
        "label": "Cement",
        "name": "cement",
        "defaultValue": "Ultratech or equivalent of 43 & 53 grade",
        "type": "textarea"
      },
      {
        "label": "Aggregates",
        "name": "aggregates",
        "defaultValue": "20mm & 40mm",
        "type": "textarea"
      },
      {
        "label": "Blocks",
        "name": "blocks",
        "defaultValue": "Standard Bricks For Partition walls. 6-Inch Thick Exterior Walls | 4 Inch Thick Inner Walls",
        "type": "textarea"
      },
      {
        "label": "RCC Design Mix",
        "name": "rcc_design_mix",
        "defaultValue": "ACC or Ultratech M20 / M25 or As per the structural designer recommendation",
        "type": "textarea"
      },
      {
        "label": "M Sand and P Sand",
        "name": "M_Sand_and_P_sand",
        "defaultValue": "Blockwork & All Masonry Works  and Plastering Works",
        "type": "textarea"
      },
      {
        "label": "Parapet Wall",
        "name": "parapet_wall",
        "defaultValue": "3.5' Feet Height | 6' Thick (Or) Toughened Glass Railing if Required",
        "type": "textarea"
      },
      // {
      //   "label": "Steel Reinforcement",
      //   "name": "steel_reinforcement",
      //   "defaultValue": "As per Standard",
      //   "type": "textarea"
      // },
    ]
  },
  {
    title: 'Kitchen standard',
    fields: [
      {
        "label": "Ceramic Wall Dado",
        "name": "ceramic_wall_dado",
        "defaultValue": "Vitrified Tile (4'X2') | Upto ₹65/Sqft",
        "type": "textarea"
      },
      {
        "label": "Main Sink Faucet",
        "name": "main_sink_faucet",
        "defaultValue": "Upto Rs.1300",
        "type": "textarea"
      },
      {
        "label": "Any other Faucet or Accessories",
        "name": "faucet_accessories",
        "defaultValue": "ISI Marked",
        "type": "textarea"
      },
      {
        "label": "Kitchen Sink",
        "name": "kitchen_sink",
        "defaultValue": "Stainless Steel of Single Sink make worth Rs. 3,000",
        "type": "textarea"
      },
      {
        "label": "Kitchen Granite Top",
        "name": "Kitchen_granite_top",
        "defaultValue": "Upto ₹160/Sqft",
        "type": "textarea"
      },
      {
        "label": "Dining",
        "name": "Dining",
        "defaultValue": "Wall Mounted Wash Basin",
        "type": "textarea"
      }
    ]

  },
  {
    title: '   Bathroom standard',
    fields: [
      {
        "label": "Wall Tiles",
        "name": "wall_tiles",
        "defaultValue": " Upto Ceiling (Full Height). 4'X2' Vitrified Tile",
        "type": "textarea"
      },
      {
        "label": "Bath & CP Fittings",
        "name": "Bath_CP_Fittings",
        "defaultValue": "Jaquar | Per Bathroom | Wall Mounted EWC, Wall Mounted Wash Basin, Pillar Tap, Health Faucet, Shower Set, Concealed Wall Mixer.",
        "type": "textarea"
      },
      {
        "label": "Plumbing Pipes & Fittings",
        "name": "Plumbing_Pipes_Fittings",
        "defaultValue": "Inner CPVC, Outer PVC. Brands: Ashirwad / Finolex",
        "type": "textarea"
      }
    ]

  },
  {
    title: 'Doors & Windows',
    fields: [
      {
        "label": "Windows",
        "name": "windows",
        "defaultValue": "Aluminium Windows with glass shutters and mesh shutters (3 track with 1 mesh) of Jindal Profiles",
        "type": "textarea"
      },
      {
        "label": "Main Door",
        "name": "main_door",
        "defaultValue": "Flush Door with Veneer. Sal wood frame of 5 inch by 3 inch, worth Rs.20,000 including fixtures.",
        "type": "textarea"
      },
      {
        "label": "Internal Doors",
        "name": "internal_doors",
        "defaultValue": "Membrane doors / Flush Door with Laminates upto Rs.9,000 including fixtures. Door Frames of Sal Wood 4 inch by 2.5 inch.",
        "type": "textarea"
      },
      {
        "label": "Pooja Room Door",
        "name": "pooja_room_door",
        "defaultValue": "Burma Teak along with Teak frame of 5inch by 2.5 inch, worth Rs. 35,000 for every 2,000 sft package area",
        "type": "textarea"
      }
    ]

  },
  {
    title: 'Painting',
    fields: [
      {
        "label": "Interior Painting",
        "name": "interior_painting",
        "defaultValue": "JK Putty + Tractor Emulsion or equivalent",
        "type": "textarea"
      },
      {
        "label": "Exterior Painting",
        "name": "exterior_painting",
        "defaultValue": "Asian Primer + Ace Exterior emulsion Paint or equivalent",
        "type": "textarea"
      }
    ]

  },
  {
    title: 'Flooring',
    fields: [
      {
        "label": "Living & Dining Flooring",
        "name": "living_dining_flooring",
        "defaultValue": "Tiles of value upto Rs.50 per sqft",
        "type": "textarea"
      },
      {
        "label": "Rooms & Kitchen Flooring",
        "name": "rooms_kitchen_flooring",
        "defaultValue": "Tiles of value upto Rs.50 per sqft",
        "type": "textarea"
      },
      {
        "label": "Balcony and Open Areas Flooring",
        "name": "balcony_open_areas_flooring",
        "defaultValue": "Anti-skid tiles of value upto Rs.40 per sqft",
        "type": "textarea"
      },
      {
        "label": "Staircase Flooring",
        "name": "staircase_flooring",
        "defaultValue": "Sadarahalli Granite of value upto ₹ 70 per sqft",
        "type": "textarea"
      },
      {
        "label": "Parking Tiles",
        "name": "parking_tiles",
        "defaultValue": "Anti-skid tiles of value upto ₹ 40 per sqft",
        "type": "textarea"
      }
    ]

  },
  {
    title: 'Electrical',
    fields: [
      {
        "label": "Wiring",
        "name": "wiring",
        "defaultValue": "All wiring shall be done with fire proof wires of Finolex silver FR or equivalent.",
        "type": "textarea"
      },
      {
        "label": "Switches & Sockets",
        "name": "switches_sockets",
        "defaultValue": "Polycab modular or equivalent",
        "type": "textarea"
      },
      {
        "label": "UPS Wiring Provision",
        "name": "ups_wiring_provision",
        "defaultValue": "UPS Wiring Provision",
        "type": "textarea"
      },
      {
        "label": "EV Charging Point",
        "name": "ev_charging_point",
        "defaultValue": "1 EV Charging Point at Ground floor",
        "type": "textarea"
      }
    ]
  },
  {
    title: 'Miscellaneous standard',
    fields: [
      {
        "label": "Overhead Tank",
        "name": "overhead_tank",
        "defaultValue": "A Sintex / Apollo Double layered overhead tank of 2000L shall be provided. Any Additional capacity shall be chargeable at INR 9 per L. Platform for the OHT shall be charged additional based on the design and specifications",
        "type": "textarea"
      },
      {
        "label": "Underground Sump",
        "name": "underground_sump",
        "defaultValue": "8000 Ltrs",
        "type": "textarea"
      },
      {
        "label": "Staircase Railing",
        "name": "staircase_railing",
        "defaultValue": "SS (Stainless) Glass Railing of SS 304 grade profiles",
        "type": "textarea"
      },
      {
        "label": "Window Grills",
        "name": "window_grills",
        "defaultValue": "Basic MS Grill with enamel Paint at Rs. 180 per Sqft",
        "type": "textarea"
      },
      {
        "label": "Copper Gas Connection",
        "name": "copper_gas_connection",
        "defaultValue": "1 Copper gas connection for every dwelling unit of 1,500 sft package area",
        "type": "textarea"
      },
      {
        "label": "Balcony Railing",
        "name": "Balcony_Railing",
        "defaultValue": "SS 304 Grade Railing with 8mm Toughened Glass with Posts",
        "type": "textarea"
      }
    ]
  },
  {
    title: "What's included as Extras",
    fields: [
      {
        "label": "Compound Wall  & Gate",
        "name": "overhead_tank",
        "defaultValue": "Included",
        "type": "textarea"
      },
      {
        "label": "Sump & Septic Tank",
        "name": "underground_sump",
        "defaultValue": "Included",
        "type": "textarea"
      },
      {
        "label": "Lift, Electricity Connection",
        "name": "staircase_railing",
        "defaultValue": "Included",
        "type": "textarea"
      },
      {
        "label": "Building Plan Approval",
        "name": "window_grills",
        "defaultValue": "Included",
        "type": "textarea"
      },
      {
        "label": "Elevation Special Materials",
        "name": "copper_gas_connection",
        "defaultValue": "Included",
        "type": "textarea"
      },
      {
        "label": "Balcony Railing",
        "name": "Balcony_Railing",
        "defaultValue": "Included",
        "type": "textarea"
      }
    ]
  },
  {
    title: "Extras",
    fields: []
  }
];

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string().matches(/^[0-9]{10}$/, 'Phone number must be 10 digits').required('Phone number is required'),
  address: Yup.string().required('Address is required'),
});

const MultipleQuote = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quoteValues, setQuoteValues] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const selectedBuilders = location.state?.selectedBuilders || [];
  console.log("Selected Buliders : ", selectedBuilders);

  const handleFieldChange = (name: string, value: string) => {
    setQuoteValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (values: any) => {
    setLoading(true);
    setIsModalOpen(false);

    const finalSections = sections.map((section) => {
      const sectionData = section.fields.map((field) => ({
        label: field.label,
        name: field.name,
        value:
          field.type === 'radio'
            ? quoteValues[field.name] || 'No'
            : quoteValues[field.name] || field.defaultValue,
      }));
      return { sectionTitle: section.title, sectionData };
    });

    const data = {
      contactDetails: values,
      quoteDetails: finalSections,
      builders: selectedBuilders
    };

    console.log(data);

    await fetch(`http://localhost:3000/submit-quote`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setIsModalOpen(false);
        if (data.error) {
          showAlert("Error", data.error, "error");
          return;
        }
        else {
          showAlert("success", data.message, "success");
          return;
        }
      })
      .catch((e) => {
        console.error(e);
        showAlert('error', 'Submission failed. Try again.', "error");
        setLoading(false);
        setIsModalOpen(false);
      });

    // await new Promise(resolve => setTimeout(resolve, 2000));

    // showAlert("Success", "Your Requested subitted successfully", "success");

  };

  return (
    <>
      {loading && (
        <LoadingSpinner text='submitting your quote details...' />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-6">

          {/* LEFT COLUMN */}
          <div className="bg-white mb-3 px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h2 className="text-3xl font-bold mb-5 text-gray-900 text-left">
              Partnered Experts Quotation
            </h2>
            <p className="text-gray-700 mb-4 text-left">
              At Attica Infra Services, we take the time to understand your preferences and create a design that matches your vision. Whether you have specific ideas in mind or need tailored concepts, we'll bring your dream home to life using quality materials and thoughtful design.
            </p>
            <ul className="space-y-3 mb-4 text-justify">
              <li className="flex items-start text-gray-800">
                <ArrowRightCircle className="min-w-[20px] min-h-[20px] w-5 h-5 text-green-600 mt-1 mr-2" />
                <span>
                  We believe that everyone's vision for their dream home is unique.
                </span>
              </li>
              <li className="flex items-start text-gray-800">
                <ArrowRightCircle className="min-w-[20px] min-h-[20px] w-5 h-5 text-green-600 mt-1 mr-2" />
                <span>
                  Based on your quality requirements, we will provide the best fixed estimate—ensuring transparency, no hidden costs, and a seamless process from start to finish.
                </span>
              </li>
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-[300px] w-full">
            <img
              src="./services/partered.jpeg"
              alt="Construction Site"
              className="rounded-lg object-cover w-full h-full shadow-2xl"
            />
          </div>
        </div>
      </div>

      <div className="min-h-screen pt-3 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* <h1 className="text-3xl font-bold text-center">Customize Your Quote</h1> */}
          <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
            {sections.map((section) => (
              <Disclosure key={section.title}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="w-full flex justify-between items-center bg-blue-100 px-4 py-3 rounded-lg font-semibold">
                      <span>{section.title}</span>
                      <ChevronDown className={`h-5 w-5 transition-transform ${open ? 'rotate-180' : ''}`} />
                    </Disclosure.Button>
                    <Disclosure.Panel className="space-y-4 mt-4">
                      {section.fields.map((field) =>
                        field.type === 'None' ? (
                          <div key={field.name} className="md:col-span-2">
                            <div className="bg-gray-50 p-4 border rounded-lg">
                              <strong>{field.label}</strong>
                              <p className="text-gray-600">{field.defaultValue}</p>
                            </div>
                          </div>
                        ) : (
                          <div key={field.name} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-gray-50 p-4 border rounded-lg">
                              <label className="block font-semibold mb-1">{field.label}</label>
                              <p className="text-gray-600">{field.defaultValue}</p>
                            </div>
                            {field.type === 'textarea' ? (
                              <div className="bg-gray-50 p-4 border rounded-lg">
                                <label className="block font-semibold mb-1">Your Preference</label>
                                <textarea
                                  className="w-full border px-3 py-2 rounded-md"
                                  rows={2}
                                  value={quoteValues[field.name] || ''}
                                  placeholder={`Enter your preferred ${field.label.toLowerCase()}`}
                                  onChange={(e) => handleFieldChange(field.name, e.target.value)}
                                />
                              </div>
                            ) : field.type === 'radio' ? (
                              <div className="bg-gray-50 p-4 border rounded-lg">
                                <label className="block font-semibold mb-1">Include?</label>
                                <div className="flex space-x-4">
                                  <label className="inline-flex items-center space-x-2 cursor-pointer">
                                    <input
                                      type="radio"
                                      name={field.name}
                                      value="Yes"
                                      checked={quoteValues[field.name] === 'Yes'}
                                      onChange={() => handleFieldChange(field.name, 'Yes')}
                                      className="form-radio accent-blue h-5 w-5 text-blue-600 focus:ring-blue-500 accent-blue-700"
                                    />
                                    <span className="text-gray-800">Yes</span>
                                  </label>
                                  <label className="inline-flex items-center space-x-2 cursor-pointer">
                                    <input
                                      type="radio"
                                      name={field.name}
                                      value="No"
                                      checked={quoteValues[field.name] !== 'Yes'}
                                      onChange={() => handleFieldChange(field.name, 'No')}
                                      className="form-radio accent-blue h-5 w-5 text-red-600 focus:ring-red-500"
                                    />
                                    <span className="text-gray-800">No</span>
                                  </label>
                                </div>
                              </div>
                            ) : null}
                          </div>
                        )
                      )}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
            <div className="text-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
              >
                Get Detailed Estimation
              </button>
            </div>
          </div>
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Contact Details</h2>
                <button onClick={() => setIsModalOpen(false)}>
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>
              <Formik
                initialValues={{ name: '', email: '', phone: '', address: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
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
                          className="w-full border px-3 py-2 rounded-md"
                        />
                        {(errors as any)[field] && (touched as any)[field] && (
                          <div className="text-red-500 text-sm mt-1">{(errors as any)[field]}</div>
                        )}
                      </div>
                    ))}
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
                    >
                      {loading ? <Loader2 className="animate-spin mx-auto" /> : 'Get Detailed Estimation'}
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        )}
      </div>

      <div className=' max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 flex flex-col pb-10'>

        <ul>
          <li className="pb-3 flex items-start text-gray-800">
            <ArrowRightCircle className="min-w-[20px] min-h-[20px] w-5 h-5 text-green-600 mt-1 mr-2" />
            <span>  We will explain the entire process— from foundation to final painting, we manage the entire
              construction process and hand over the keys upon completion.
            </span>
          </li>

          <li className=" flex items-start text-gray-800">
            <ArrowRightCircle className="min-w-[20px] min-h-[20px] w-5 h-5 text-green-600 mt-1 mr-2" />
            <span>  Before starting the construction journey, it&#39;s important to understand the process.
              We offer a detailed explanation meeting (approx. 45 minutes), which we believe
              is truly worth your time. It gives you clarity on about 99% of what goes into your
              home even before we begin.
            </span>
          </li>
        </ul>

      </div>

      <FeatureGrid
        features={features}
        bgColors={bgColors}
        subheading=' '
      />

      <ImageSlider
        title=' '
        data={endToEnd} />

      <div style={{ paddingBottom: "15px" }}></div>
    </>
  );
};

export default MultipleQuote;
