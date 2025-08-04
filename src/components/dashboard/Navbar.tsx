import { Menu, X } from 'lucide-react';
import React from 'react';
import Logo from '../layout/Logo';

interface NavbarProps {
  toggleSidebar: () => void;
  sidebarOpen: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar, sidebarOpen }) => {
  return (
    <header className="bg-white border-b border-gray-200 fixed w-full z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
              onClick={toggleSidebar}
              aria-label="Toggle sidebar"
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            <div className="flex items-center ml-4">
              {/* <Construction className="h-8 w-8 text-blue-800" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                <Link to={'/'} >ConstructAdmin</Link>
              </span> */}
              <Logo />
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="flex items-center">
              <img
                className="h-8 w-8 rounded-full"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="User"
              />
              <span className="ml-2 text-sm font-medium text-gray-700 hidden sm:inline-block">
                Admin User
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;