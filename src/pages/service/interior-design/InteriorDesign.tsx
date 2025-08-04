import { Activity, BookOpen, CheckCircle, FileText, Handshake, Home, PencilRuler, PenTool, Users, UtensilsCrossed } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HowItWorksUI from '../../../components/ui/HowItWorks';
import ImageSlider from '../../../components/ui/ImageSlider';
import LetsConnect from '../../../components/ui/LetsConnect';
import { showAlert } from '../../../utils/Alerts';
import LoadingSpinner from '../../../components/ui/LoadingSpinner';

const InteriorDesign: React.FC = () => {


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (contactDetails: any) => {
    console.log(contactDetails);
    setLoading(true);

    // await new Promise(resolve => setTimeout(resolve, 2000));
    // setLoading(false);
    // showAlert("Success", "Your details submitted successfully. Your experts will contact you.")

    try {
      const res = await fetch(`http://localhost:3000/submit-contact-details`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactDetails),
      });

      const response = await res.json();
      console.log(response);

      if (response.error) {
        showAlert("Error", response.error, "error")
        return;
      }
      showAlert("success", 'Your Design Consultation request submitted successfully!', "success");
    } catch (e: any) {
      console.error(e);
      showAlert("Error", e.message || String(e), "error");
    }
    
    finally {
      setLoading(false);
    }
  }
  const endToEnd = [
    { id: '1', imageUrl: './interior-design/end-to-end/1.jpg' },
    { id: '2', imageUrl: './interior-design/end-to-end/2.jpg' },
    { id: '3', imageUrl: './interior-design/end-to-end/3.jpg' },
    { id: '4', imageUrl: './interior-design/end-to-end/4.jpg' },
    { id: '5', imageUrl: './interior-design/end-to-end/5.jpg' },
  ];

  const kitchen = [
    { id: '1', imageUrl: './interior-design/kitchen/1.jpg' },
    { id: '2', imageUrl: './interior-design/kitchen/2.jpg' },
    { id: '3', imageUrl: './interior-design/kitchen/3.jpg' },
    { id: '4', imageUrl: './interior-design/kitchen/4.jpg' },
    { id: '5', imageUrl: './interior-design/kitchen/5.jpg' },
  ];
  const livingRoom = [
    { id: '1', imageUrl: './interior-design/living-room/1.jpg' },
    { id: '2', imageUrl: './interior-design/living-room/2.jpg' },
    { id: '3', imageUrl: './interior-design/living-room/3.jpg' },
    { id: '4', imageUrl: './interior-design/living-room/4.jpg' },
    { id: '5', imageUrl: './interior-design/living-room/5.jpg' },
  ];
  const wardrobe = [
    { id: '1', imageUrl: './interior-design/wardrode/1.jpg' },
    { id: '2', imageUrl: './interior-design/wardrode/2.jpg' },
    { id: '3', imageUrl: './interior-design/wardrode/3.jpg' },
    { id: '4', imageUrl: './interior-design/wardrode/4.jpg' },
    { id: '5', imageUrl: './interior-design/wardrode/5.jpg' },
  ];

  const steps = [
    {
      icon: <FileText className="w-5 h-5" />,
      number: 1,
      title: 'Consultation & Requirement Gathering',
      description: 'We begin by understanding your lifestyle, taste, functional needs, and budget through an in-depth discussion.',
      image: './how-it-works/interior-design/1.jpg',
    },
    {
      icon: <Users className="w-5 h-5" />,
      number: 2,
      title: 'Site Visit & Measurements',
      description: 'Our team visits your site to take accurate measurements and evaluate space usage, lighting, and existing layout.',
      image: './how-it-works/interior-design/2.jpg',
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      number: 3,
      title: 'Concept Design & Mood Boards',
      description: 'We share initial layout plans, 2D/3D visuals, and material samples to align on style, color palettes, and design direction.',
      image: './how-it-works/interior-design/3.jpg',
    },
    {
      icon: <PenTool className="w-5 h-5" />,
      number: 4,
      title: 'Detailed Design & Estimation',
      description: 'Once concepts are approved, we create detailed drawings, working plans, and give you a transparent quotation.',
      image: './how-it-works/interior-design/4.jpg',
    },
    {
      icon: <Activity className="w-5 h-5" />,
      number: 5,
      title: 'Material Selection',
      description: 'We assist in selecting premium-quality materials, finishes, fittings, and furnishings within your budget.',
      image: './how-it-works/interior-design/5.jpg',
    },
    {
      icon: <Home className="w-5 h-5" />,
      number: 6,
      title: 'Execution & Supervision',
      description: 'Our in-house team executes the project under strict supervision, ensuring quality, timelines, and minimal disruptions.',
      image: './how-it-works/interior-design/6.jpg',
    },
    {
      icon: <Handshake className="w-5 h-5" />,
      number: 7,
      title: 'Handover & Final Touches',
      description: 'After a thorough quality check, we hand over the completed interiors—clean, polished, and ready to move in.',
      image: './how-it-works/interior-design/7.jpg',
    },
  ];

  const cards = [
    {
      icon: <UtensilsCrossed className="w-8 h-8 text-blue-500" />,
      title: 'End-to-end interior solutions',
      description: 'Get costing for your entire interiors.',
      buttonText: 'Get Free Estimate',
      button: (
        <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          <Link to={"/design-details"}>Get Free Estimate</Link>
        </button>
      )
    },
    {
      icon: <PencilRuler className="w-8 h-8 text-blue-500" />,
      title: 'Design Consultation',
      description: 'Share your ideas and home plan to receive personalised 3D designs and an instant quote.',
      buttonText: 'Book Free Design Session',
      button: (
        <button onClick={() => { setIsModalOpen(true) }} className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Book Free Design Session
        </button>
        // <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
        //   <Link to={"/design-details"}>Book Free Design Session</Link>
        // </button>
      )
    },
  ];

  const colors = [
    'bg-green-100',
    'bg-yellow-100'
  ]

  return (
    <>
      {loading && <LoadingSpinner text='Submitting your details....' />}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-6 pb-8">

          {/* LEFT COLUMN */}
          <div className="bg-white  px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Integrated Interior Design Services
            </h2>
            <p className="text-gray-700 mb-4 text-justify">
              At Attica Infra Services, we provide complete in-house interior design solutions alongside our
              construction services. By planning both structure and interiors together, we help you:
            </p>

            <ul className="space-y-3 mb-4 text-justify">
              <li className="grid grid-cols-[auto_1fr] gap-2 items-start">
                <CheckCircle size={20} className="text-green-600" />
                <span>Save costs through optimized material and space planning</span>
              </li>

              <li className="grid grid-cols-[auto_1fr] gap-2 items-start">
                <CheckCircle size={20} className="text-green-600" />
                <span> Avoid delays with streamlined execution</span>
              </li>

              <li className="grid grid-cols-[auto_1fr] gap-2 items-start">
                <CheckCircle size={20} className="text-green-600" />
                <span>Prevent rework by aligning design with structural elements from day one</span>
              </li>
            </ul>



            <p className="text-gray-700 text-left">
              Our end-to-end approach ensures a seamless journey—from blueprint to beautifully finished spaces.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-[400px] w-full">
            <img
              src="./services/interoir.jpeg"
              alt="Construction Site"
              className="rounded-lg object-cover w-full h-full shadow-2xl"
            />
          </div>
        </div>
      </div>

      <ImageSlider title="End-to-end offerings" data={endToEnd} />
      <ImageSlider title="Modern Kitchen Design" data={kitchen} />
      <ImageSlider title="Living Room Design" data={livingRoom} />
      <ImageSlider title="Wardrobe Design" data={wardrobe} />

      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900">End-to-end interior solutions</h1>
            <p className="mt-4 text-xl text-gray-600">Get an estimate for your <span className="text-blue-600">home</span>. <br />
              Calculate the cost of doing up your home interiors now.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
            {cards.map((property, idx) => (
              <div
                key={idx}
                className={`${colors[idx]} rounded-xl shadow-lg p-8 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-blue-50 p-6 rounded-full">
                    {property.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{property.title}</h2>
                  <p className="text-gray-600">{property.description}</p>
                  {/* <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    {property.buttonText}
                  </button> */}
                  {property.button}
                </div>
              </div>
            ))}
          </div>
        </div>
        <LetsConnect
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleSubmit}
          title='Enter your contact details'
          buttonText='submit details'
          initialContext={{ 'from': 'Interior design Request' }}
        />
        <HowItWorksUI
          steps={steps}
          title='Interior Design Process'
          subtitle='At Attica Infra Services, we follow a streamlined and transparent process to turn your vision into reality:'
        />
      </div>
    </>

  );
};

export default InteriorDesign;
