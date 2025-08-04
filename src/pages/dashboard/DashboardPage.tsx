import React, { useEffect, useState } from 'react';
import { Property } from '../../types/Proerty';
import DashboardOverview from '../../components/dashboard/Dashboard';
import PropertyList from '../../components/dashboard/properties/PropertyList';
import { Card, CardHeader, CardBody } from '../../components/ui/Card';
import { getDashboardStats } from '../../data/mockData';
import { fetchProperties } from '../../services/PropertyService';
import LoadingSpinner from '../../components/ui/LoadingSpinner';

const DashboardPage: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadProperties = async () => {
      setLoading(true);
      const response = await fetchProperties();
      if (response.success) {
        setProperties(response.properties);
      }
      setLoading(false);
    };

    loadProperties();
  }, []);

  if (loading) {
    return (
      // <div className="flex justify-center items-center h-64">
      //   <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
      // </div>
      <LoadingSpinner text='Fetch the staus and preparing dashbord.........' />
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <DashboardOverview stats={getDashboardStats(properties)} />
      
      <Card className="mb-6 mt-6">
        <CardHeader>
          <h2 className="text-xl font-semibold">Recent Properties</h2>
        </CardHeader>
        <CardBody>
          <PropertyList properties={properties.slice(0, 3)} />
        </CardBody>
      </Card>
    </div>
  );
};

export default DashboardPage;
