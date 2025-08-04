import { Facebook, Instagram, Linkedin, Mail, Phone, Youtube } from 'lucide-react';

const Topbar = () => {
  return (
    <div className="bg-blue-600 text-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <a href="tel:+91-7899997784" className="flex items-center text-sm hover:text-blue-200">
              <Phone className="w-4 h-4 mr-1" />
              +91 78999 97784
            </a>
            <a href="mailto:atticainfra@gmail.com" className="flex items-center text-sm hover:text-blue-200">
              <Mail className="w-4 h-4 mr-1" />
              atticainfra@gmail.com
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/sekhar.muthakana.2025/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://www.youtube.com/@atticainfra" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/atticainfraservices?igsh=MXVjbm11ZjZidGhlNQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="http://www.linkedin.com/in/attica-infra-service-343179360" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;