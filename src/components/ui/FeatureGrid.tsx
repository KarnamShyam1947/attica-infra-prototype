import React from 'react';

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeatureGridProps {
  heading?: string;
  subheading?: string;
  features: FeatureItem[];
  bgColors?: string[]; // Optional for custom background colors
}

const FeatureGrid: React.FC<FeatureGridProps> = ({
  heading = "Why Choose Us",
  subheading = "Building trust through excellence and reliability",
  features,
  bgColors = ["bg-orange-100", "bg-blue-100", "bg-green-100", "bg-yellow-100", "bg-purple-100"],
}) => {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{heading}</h2>
          <p className="mt-4 text-xl text-gray-600">{subheading}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${bgColors[index % bgColors.length]}`}
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

export default FeatureGrid;
