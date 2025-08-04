import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import DashboardLayout from './components/dashboard/DashboardLayout';
import BuilderFormPage from './pages/dashboard/BuilderFormPage';
import BuildersPage from './pages/dashboard/BuildersPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import PropertiesPage from './pages/dashboard/PropertiesPage';
import PropertyFormPage from './pages/dashboard/PropertyFormPage';
import Home from './pages/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ForgotPassword from './components/auth/ForgotPassword';
import ResetPassword from './components/auth/ResetPassword';
import ProtectedRoute from './components/ProtectedRoute';
import QuoteSelection from './pages/service/construction/QuoteSelection';
import BuilderSelection from './pages/service/construction/BuilderSelection';
import ConstructionForm from './pages/service/construction/ConstructionForm';
import SingleQuote from './pages/service/construction/SingleQuote';
import SellBuy from './pages/service/buy-sell/SellBuy';
import PropertyDetails from './pages/service/buy-sell/PropertyDetails';
import NotFound from './components/NotFound';
import Layout from './components/layout/Layout';
import MaterialsOrderForm from './MaterialsOrderForm';
import Test from './Test';
import InteriorDesign from './pages/service/interior-design/InteriorDesign';
import DesignDetails from './pages/service/interior-design/DesignDetails';
import ArchitectureDesign from './pages/service/architecture-design/ArchitectureDesign';
import MultipleQuote from './pages/service/construction/MultipleQuote';
import About from './components/About';
import RequestPage from './pages/dashboard/RequestPage';

const AppContent = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');
  const [editProperty] = useState<any>(null);
  const [editBuilder, setEditBuilder] = useState<any>(null);
  const [propertySearch, setPropertySearch] = useState({
    city: '',
    area: '',
    pincode: ''
  });
  const [builderSearch, setBuilderSearch] = useState({
    city: '',
    area: '',
    pincode: ''
  });
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    closeSidebar();
  }, [location.pathname]);

  return (

    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/test' element={<Test />} />
          <Route path='/materials-order' element={<MaterialsOrderForm />} />
          <Route path="interior-design" element={<InteriorDesign />} />
          <Route path="design-details" element={<DesignDetails />} />
          <Route path="architecture-design" element={<ArchitectureDesign />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password/:token" element={<ResetPassword />} />
          <Route path="quote" element={
            <QuoteSelection />
          } />
          <Route path="builders" element={
            <BuilderSelection />
          } />
          <Route path="construction-form" element={
            <ConstructionForm />
          } />
          <Route path="multiple-quote" element={
            <MultipleQuote />
          } />
          <Route path="single-quote" element={
            <SingleQuote />
          } />
          <Route path="sell-buy" element={
            <SellBuy />
          } />
          <Route path="property/:type" element={
            <PropertyDetails />
          } />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          } />
          
          <Route path="/requests" element={
            <ProtectedRoute>
              <RequestPage />
            </ProtectedRoute>
          } />

          <Route
            path="/dashboard/properties"
            element={
              <ProtectedRoute>
                <PropertiesPage
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  filterType={filterType}
                  setFilterType={setFilterType}
                  propertySearch={propertySearch}
                  setPropertySearch={setPropertySearch}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/properties/add"
            element={
              <ProtectedRoute>
                <PropertyFormPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/properties/edit/:id"
            element={
              <ProtectedRoute>
                <PropertyFormPage
                  property={editProperty}
                  isEditing
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/builders"
            element={
              <ProtectedRoute>
                <BuildersPage
                  builderSearch={builderSearch}
                  setBuilderSearch={setBuilderSearch}
                  onAddNew={() => setEditBuilder(null)}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/builders/add"
            element={
              <ProtectedRoute>
                <BuilderFormPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/builders/edit/:id"
            element={
              <ProtectedRoute>
                <BuilderFormPage
                  builder={editBuilder}
                  isEditing
                />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </>

  );
};

export default AppContent;