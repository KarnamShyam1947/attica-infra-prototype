import { Outlet } from 'react-router-dom';
import Chatbot from '../Chatbot';
import Topbar from './Topbar';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Topbar />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Layout;