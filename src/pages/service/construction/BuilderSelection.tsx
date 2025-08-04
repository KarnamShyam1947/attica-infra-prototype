import BuilderList from '../../../components/BuilderList';

const BuilderSelection = () => {
  return (
    <>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white py-10 px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Multiple Estimates, Your Choice
          </h2>
          <p className="text-gray-700 mb-4 text-left">
            With Attica Infra Services, you can receive multiple estimates from our Partnered Experts, giving you the flexibility to compare and choose the best option for your budget and needs—with no hidden charges.
          </p>
          <p className="text-xl pt-3 font-bold text-center">
            More options, more control. Choose with confidence—no surprises.
          </p>
        </div>

      </div>
      <BuilderList />

    </>
  );
};

export default BuilderSelection;