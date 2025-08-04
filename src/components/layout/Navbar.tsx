import { Home, Info, LayoutDashboard, LogOut, Menu, Wrench, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import LetsConnect from '../ui/LetsConnect';
import Logo from './Logo';
import LoadingSpinner from '../ui/LoadingSpinner';
import { showAlert } from '../../utils/Alerts';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    setShowLogoutConfirm(true);
  };

  const confirmLogout = () => {
    logout();
    setShowLogoutConfirm(false);
    navigate('/');
  };

  const handleSubmit = async (contactDetails: any) => {
    console.log(contactDetails);
    setLoading(true);
    
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
      showAlert("success", 'Your Contact request submitted successfully!', "success");
    } catch (e: any) {
      console.error(e);
      showAlert("Error", e.message || String(e), "error");
    }
    
    finally {
      setLoading(false);
    }
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading && <LoadingSpinner text='submitting your detais...' />}

      <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <Logo />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <Link to="/" className="flex items-center text-gray-700 hover:text-blue-600">
                  <Home className="w-4 h-4 mr-1" />
                  Home
                </Link>
                <Link to="/about" className="flex items-center text-gray-700 hover:text-blue-600">
                  <Info className="w-4 h-4 mr-1" />
                  About Us
                </Link>
                <a href="/#services" className="flex items-center text-gray-700 hover:text-blue-600">
                  <Wrench className="w-4 h-4 mr-1" />
                  Services
                </a>

                {isAuthenticated ? (
                  <div className="flex items-center space-x-4">
                    <Link
                      to="/dashboard"
                      className="flex items-center text-gray-700 hover:text-blue-600"
                    >
                      <LayoutDashboard className="w-4 h-4 mr-1" />
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      <span className="mr-2">{user?.name}</span>
                      <LogOut className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center space-x-4">
                    <Link
                      to="/login"
                      className="text-gray-700 hover:text-blue-600"
                    >
                      Login
                    </Link>

                  </div>
                )}

                <button className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors'>
                  <Link to={"materials-order"}>Order Materials</Link>
                </button>
                <button onClick={() => setIsModalOpen(true)} className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors'>
                  Let's Connect
                </button>
                <LetsConnect
                  title="Let's Connect"
                  buttonText="Let's Talk"
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                  onSubmit={handleSubmit}
                  initialContext={{ 'from': 'Contact details from home page' }}
                />

              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div
            className={`md:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <div className="px-4 pt-4 pb-6 space-y-4">
              <Link to="/" className="block text-gray-700 hover:text-blue-600">Home</Link>
              <Link to="/about" className="block text-gray-700 hover:text-blue-600">About Us</Link>
              <a href="/#services" className="block text-gray-700 hover:text-blue-600">Services</a>

              {isAuthenticated ? (
                <>
                  <Link
                    to="/dashboard"
                    className="block text-gray-700 hover:text-blue-600"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center w-full text-gray-700 hover:text-blue-600"
                  >
                    <span className="mr-2">{user?.name}</span>
                    <LogOut className="w-4 h-4" />
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="block text-gray-700 hover:text-blue-600">Login</Link>
                  <Link to="/register" className="block text-gray-700 hover:text-blue-600">Register</Link>
                </>
              )}

              <Link
                to="/materials-order"
                className="block bg-red-500 text-white text-center px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
              >
                Order Materials
              </Link>

              <button
                onClick={() => setIsModalOpen(true)}
                className="block w-full bg-blue-600 text-white text-center px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Let's Connect
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">Confirm Logout</h3>
            <p className="text-gray-600 mb-6">Are you sure you want to logout?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={confirmLogout}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;