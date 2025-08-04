import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-10 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Contact Us</h2>
          <p className="mt-4 text-xl text-gray-600">Get in Touch for Your Construction Needs</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                  <span>+91 78999 97784</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <span>atticainfra@gmail.com</span>
                </div>
                
                {/* <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <span>G05, Silver stone, 5th cross, chinnapanalli, Bangalore, 560037</span>
                </div> */}

                {/* <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <span>Mon-Sat: 10:00 AM - 7:00 PM</span>
                </div> */}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-6">
                <a href="https://www.facebook.com/sekhar.muthakana.2025/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                  <Facebook className="w-8 h-8" />
                </a>
                <a href="https://www.youtube.com/@atticainfra" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                  <Youtube className="w-8 h-8" />
                </a>
                <a href="https://www.instagram.com/atticainfraservices?igsh=MXVjbm11ZjZidGhlNQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                  <Instagram className="w-8 h-8" />
                </a>
                <a href="http://www.linkedin.com/in/attica-infra-service-343179360" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                  <Linkedin className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;