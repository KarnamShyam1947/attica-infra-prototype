import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Attica Infra Services</h3>
            {/* <Logo /> */}
            <p className="text-gray-400">
              Building dreams into reality with quality construction and timely delivery.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-blue-400">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-blue-400">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-blue-400">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-2" />
                +91 78999 97784
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-2" />
                 atticainfra@gmail.com
              </li>
              {/* <li className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-2" />
                G05, Silver stone, 5th cross, chinnapanalli, Bangalore, 560037
              </li> */}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/sekhar.muthakana.2025/" className="text-gray-400 hover:text-blue-400">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.youtube.com/@atticainfra" className="text-gray-400 hover:text-blue-400">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/atticainfraservices?igsh=MXVjbm11ZjZidGhlNQ%3D%3D&utm_source=qr" className="text-gray-400 hover:text-blue-400">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="http://www.linkedin.com/in/attica-infra-service-343179360" className="text-gray-400 hover:text-blue-400">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Attica Infra Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;