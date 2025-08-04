import React from 'react';
import BuilderList from './BuilderList';

const ConstructionRequest = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Request Construction Service</h1>
          <p className="mt-4 text-xl text-gray-600">Select builders and submit your construction requirements</p>
        </div>

        <BuilderList />
      </div>
    </section>
  );
};

export default ConstructionRequest;