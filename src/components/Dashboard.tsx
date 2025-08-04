import React from 'react';
import { Card, CardBody } from './ui/Card';
import { Home, MapPin, Building } from 'lucide-react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from 'chart.js';
import { Pie, Line } from 'react-chartjs-2';
import { DashboardStats } from '../types/DashboradStatus';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
);

interface DashboardOverviewProps {
  stats: DashboardStats;
}

const DashboardOverview: React.FC<DashboardOverviewProps> = ({ stats }) => {
  const statCards = [
    {
      title: 'Total Properties',
      value: stats.total,
      icon: Building,
      color: 'bg-blue-800',
    },
    {
      title: 'Houses',
      value: stats.house,
      icon: Home,
      color: 'bg-amber-600',
    },
    {
      title: 'Plots',
      value: stats.plot,
      icon: MapPin,
      color: 'bg-green-600',
    },
    {
      title: 'Flats',
      value: stats.flat,
      icon: Building,
      color: 'bg-purple-600',
    },
  ];

  const propertyTypeData = {
    labels: ['Houses', 'Plots', 'Flats'],
    datasets: [
      {
        data: [stats.house, stats.plot, stats.flat],
        backgroundColor: ['#B45309', '#059669', '#7C3AED'],
        borderColor: ['#ffffff'],
        borderWidth: 2,
      },
    ],
  };

  const monthlyData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Properties Added',
        data: [4, 6, 8, 5, 7, stats.total],
        borderColor: '#1E40AF',
        backgroundColor: 'rgba(30, 64, 175, 0.1)',
        tension: 0.4,
      },
      {
        label: 'Builders Added',
        data: [2, 3, 4, 3, 5, 6],
        borderColor: '#059669',
        backgroundColor: 'rgba(5, 150, 105, 0.1)',
        tension: 0.4,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Monthly Growth',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="overflow-hidden">
              <CardBody className="flex items-center p-6">
                <div className={`${stat.color} p-4 rounded-lg mr-4`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              </CardBody>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardBody>
            <h3 className="text-lg font-semibold mb-4">Property Types Distribution</h3>
            <div className="h-[300px] flex items-center justify-center">
              <Pie data={propertyTypeData} />
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <div className="h-[300px]">
              <Line options={lineOptions} data={monthlyData} />
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default DashboardOverview;