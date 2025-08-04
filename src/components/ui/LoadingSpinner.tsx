import { Loader } from "lucide-react";

const LoadingSpinner = ({ text = 'Loading...' }) => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-70 z-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <Loader className="animate-spin h-8 w-8 text-blue-600" />
        <p className="text-blue-600 font-semibold">{text}</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
