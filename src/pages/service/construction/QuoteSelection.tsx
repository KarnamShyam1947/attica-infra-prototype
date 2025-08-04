import { ArrowRightCircle, UserPlus, Users } from 'lucide-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const QuoteSelection = () => {
  const navigate = useNavigate();

  useEffect(() => {

    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <div className='scroll-container'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-16">

          {/* LEFT COLUMN */}
          <div className="bg-white max-w-6xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">
              Why Offer Two Quote Options?
            </h2>
            <ul className="space-y-3 mb-4 text-justify">
              <li className="flex text-gray-800">
                <ArrowRightCircle className="min-w-[20px] min-h-[20px] w-5 h-5 text-green-600 mt-1 mr-2" />
                <span>
                  Every home is unique, with different needs, priorities, and budgets.
                </span>
              </li>
              <li className="flex items-start text-gray-800">
                <ArrowRightCircle className="min-w-[20px] min-h-[20px] w-5 h-5 text-green-600 mt-1 mr-2" />
                <span>
                  At Attica Infra Services, we give you the flexibility to choose how your project is executed—without compromising on quality, design, or transparency.
                </span>
              </li>
              <li className="flex items-start text-gray-800">
                <ArrowRightCircle className="min-w-[20px] min-h-[20px] w-5 h-5 text-green-600 mt-1 mr-2" />
                <span>
                  Whether you prefer our In-House Quotation for full support or go with Partnered Experts for flexible comparisons, both options follow Attica's high standards and are tailored to your comfort.
                </span>
              </li>
            </ul>
            <p className="text-xl pt-3 font-bold text-left">
              Your home, your choice—built your way.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-[300px] w-full">
            <img
              src="./services/bulid-your-way.jpeg"
              alt="Construction Site"
              className="rounded-lg object-fix w-full h-full shadow-2xl"
            />
          </div>
        </div>
      </div>


      {/* <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center"> */}
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className=" text-3xl font-bold text-gray-900 mb-4">Choose Your Quote Type</h3>
            <p className="text-xl text-gray-600">Select how you want to proceed with your construction project</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Single Quote Option */}
            <div
              onClick={() => navigate('/single-quote')}
              className="bg-white rounded-2xl shadow-xl p-8 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 p-4 rounded-full mb-6">
                  <UserPlus className="w-12 h-12 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">In-House Quotation</h2>
                <p className="text-gray-600 mb-6">
                  Get a detailed quote from one of our trusted builders. Perfect for focused, straightforward projects.
                </p>
                <ul className="text-left text-gray-600 space-y-2 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Expert Guidance
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Quality Civil Engineering
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Turning Your Dream Home Into Lasting Reality
                  </li>
                </ul>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300">
                  Get In-House Quotation
                </button>
              </div>
            </div>
            {/* Multiple Quotes Option */}
            <div
              onClick={() => navigate('/builders')}
              className="bg-white rounded-2xl shadow-xl p-8 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 p-4 rounded-full mb-6">
                  <Users className="w-12 h-12 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Partnered Experts Quotation</h2>
                <p className="text-gray-600 mb-6">
                  Compare quotes from multiple builders to find the best match for your construction needs.
                </p>
                <ul className="text-left text-gray-600 space-y-2 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Compare prices
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Multiple options
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Best value selection
                  </li>
                </ul>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300">
                  Get partnered experts Quotation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteSelection;