
const CommingSoon = () => {
    const handleGoBack = () => {
        window.history.back();
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Image Section */}
                <div className="h-64 bg-indigo-600 flex items-center justify-center">
                    <div className="relative w-full h-full">
                        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-24 h-24 text-gray-500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-8 text-center">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Coming Soon</h1>
                    <p className="text-gray-600 mb-8">
                        We're working on something exciting! This page will be available shortly.
                    </p>

                    {/* Go Back Button */}
                    <button
                        onClick={handleGoBack}
                        className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CommingSoon