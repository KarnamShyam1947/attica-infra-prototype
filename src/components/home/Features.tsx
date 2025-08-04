import { Clock, DollarSign, HeartHandshake } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Clock className="w-12 h-12 text-blue-600" />,
      title: "Save Time",
      description: "Forget about manual calculations and endless research. Our home building cost calculator makes the process quick and easy, so you can focus on what matters most."
    },
    {
      icon: <DollarSign className="w-12 h-12 text-blue-600" />,
      title: "Stay on Budget",
      description: "Avoid overpaying by getting accurate cost estimates for your project. Stay within your budget and plan efficiently."
    },
    {
      icon: <HeartHandshake className="w-12 h-12 text-blue-600" />,
      title: "Make Informed Decisions",
      description: "With precise cost estimates, you can prioritize tasks and allocate resources effectively, making better decisions for your project."
    }
  ];

  const bgColors = [
    "bg-orange-100",
    "bg-blue-100",
    "bg-green-100",
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why Choose Us</h2>
          <p className="mt-4 text-xl text-gray-600">Building trust through excellence and reliability</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${bgColors[index]}`}
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
