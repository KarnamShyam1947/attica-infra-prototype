// import { ClipboardCheck, HomeIcon, Rocket } from "lucide-react";
// import ContactButton from "./ContactButton";

// const SimpleHero = () => {

//   const features = [
//     {
//       title: 'Top Architects & Civil Engineers',
//       description: 'Work with the best professionals to ensure quality and innovation.',
//       icon: HomeIcon,
//     },
//     {
//       title: 'Ethical & Organized Process',
//       description: 'Transparency and efficiency throughout your home-building journey.',
//       icon: ClipboardCheck,
//     },
//     {
//       title: 'Quick, Easy & Hassle-Free',
//       description: 'From planning to completion, we make it smooth and stress-free.',
//       icon: Rocket,
//     },
//   ];

//   return (

//     // <div className="bg-white">
//     //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     //     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16">
//     //       <div className="space-y-6">
//     //         <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
//     //           Building Your Dreams Into Reality
//     //         </h1>
//     //         <p className="text-lg text-gray-600">
//     //           With over 20 years of experience, we bring excellence and innovation to every construction project.
//     //           Your vision, our expertise.
//     //         </p>
//     //         <div className="space-x-4">
//     //           <ContactButton
//     //             buttonText="Get Started"
//     //             modalTitle="Let's Connect"
//     //             additionalInfo={{
//     //               propertyType: "Villa",
//     //               location: "New York",
//     //               price: "$500,000"
//     //             }}
//     //             onSubmit={(formData) => {
//     //               console.log('Form submitted:', formData);
//     //               // Handle form submission
//     //             }}
//     //           />
//     //           <button className="border-2 border-gray-800 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition duration-300">
//     //             Our Projects
//     //           </button>
//     //         </div>
//     //       </div>
//     //       <div className="relative h-[400px]">
//     //         <img
//     //           src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80"
//     //           alt="Construction Site"
//     //           className="rounded-lg object-cover w-full h-full shadow-2xl"
//     //         />
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>

//     <div className="bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-16">
//           {/* LEFT CONTENT */}
//           <div className="space-y-8">
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
//               Let’s Build Your Dream Home
//             </h1>
//             <p className="text-lg text-gray-600">
//               We blend tradition with modern trends to create homes that are both timeless and contemporary.
//             </p>

//             {/* Feature Cards */}
//             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
//               {features.map(({ title, description, icon: Icon }) => (
//                 <div
//                   key={title}
//                   className="p-5 border border-gray-200 rounded-lg bg-gray-50 hover:shadow-md transition"
//                 >
//                   <div className="flex items-center gap-3 mb-3">
//                     <Icon className="w-6 h-6 text-indigo-600" />
//                     <h3 className="text-base font-semibold text-gray-800">{title}</h3>
//                   </div>
//                   <p className="text-sm text-gray-600">{description}</p>
//                 </div>
//               ))}
//             </div>

//             {/* Buttons */}
//             <div className="flex flex-wrap gap-4 mt-6">
//               <ContactButton
//                 buttonText="Get Started"
//                 modalTitle="Let's Connect"
//                 additionalInfo={{
//                   propertyType: 'Villa',
//                   location: 'New York',
//                   price: '$500,000',
//                 }}
//                 onSubmit={(formData) => {
//                   console.log('Form submitted:', formData);
//                 }}
//               />
//               <button className="border-2 border-gray-800 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition duration-300">
//                 Our Projects
//               </button>
//             </div>
//           </div>

//           {/* RIGHT IMAGE */}
//           <div className="relative h-[400px] w-full">
//             <img
//               src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80"
//               alt="Construction Site"
//               className="rounded-lg object-cover w-full h-full shadow-2xl"
//             />
//           </div>
//         </div>
//       </div>
//     </div>

//   )
// }

// export default SimpleHero

import { Home, ClipboardCheck, Rocket } from 'lucide-react';
import ContactButton from './ContactButton'; // Adjust the path as needed

const features = [
  {
    title: 'Top Architects & Civil Engineers',
    icon: Home,
  },
  {
    title: 'Ethical & Organized Process',
    icon: ClipboardCheck,
  },
  {
    title: 'Quick, Easy & Hassle-Free',
    icon: Rocket,
  },
];

export default function HeroSection() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-16">
          
          {/* LEFT COLUMN */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Let's Build Your <span className="text-blue-600">Dream Home</span>
            </h1>
            <p className="text-lg text-gray-600">
              We blend tradition with modern trends to create homes that are both timeless and contemporary.
            </p>

            {/* Feature Grid: Responsive 2x2 with centered last item */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map(({ title, icon: Icon }, index) => (
                <div
                  key={title}
                  className={`flex  space-x-4 ${index === 2 ? 'sm:col-span-2 ' : ''}`}
                >
                  <Icon className="w-7 h-7 text-indigo-600 sm:w-8 sm:h-8" />
                  <span className="text-base sm:text-lg font-medium text-gray-800">{title}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            {/* <div className="flex flex-wrap gap-4 mt-6">
              <ContactButton
                buttonText="Get Started"
                modalTitle="Let's Connect"
                additionalInfo={{
                  propertyType: 'Villa',
                  location: 'New York',
                  price: '$500,000',
                }}
                onSubmit={(formData) => {
                  console.log('Form submitted:', formData);
                }}
              />
              <button className="border-2 border-gray-800 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition duration-300">
                Our Projects
              </button>
            </div> */}
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-[400px] w-full">
            <img
              src="./home/main-image.jpg"
              alt="Construction Site"
              className="rounded-lg object-cover w-full h-full shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
